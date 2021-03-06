/**
 * @license
 * Use of this source code is governed by Apache License 2.0 that can be
 * found in the LICENSE file at https://github.com/CertifaiAI/Classifai_FrontEnd/blob/main/LICENSE
 */

import { BboxMetadata, ImageLabellingMode, PolyMetadata } from 'src/components/image-labelling/image-labelling.model';
import { cloneDeep } from 'lodash-es';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataSetLayoutService } from './data-set-layout-api.service';
import { DataSetProps, ProjectRename, ProjectSchema, StarredProps } from './data-set-layout.model';
import { distinctUntilChanged, first, map, mergeMap, switchMap, takeUntil } from 'rxjs/operators';
import { forkJoin, interval, Observable, Subject, Subscription, throwError } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageLabellingModeService } from './../../components/image-labelling/image-labelling-mode.service';
import { LanguageService } from 'src/shared/services/language.service';
import { Message, MessageUploadStatus } from 'src/shared/types/message/message.model';
import { ModalBodyStyle } from 'src/components/modal/modal.model';
import { ModalService } from 'src/components/modal/modal.service';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/components/spinner/spinner.service';

@Component({
    selector: 'data-set-layout',
    templateUrl: './data-set-layout.component.html',
    styleUrls: ['./data-set-layout.component.scss'],
})
export class DataSetLayoutComponent implements OnInit, OnDestroy {
    onChangeSchema: DataSetProps = {
        currentThumbnailIndex: -1,
        thumbnailName: '',
        totalNumThumbnail: 0,
        status: undefined,
    };
    projectList: ProjectSchema = {
        projects: [],
        isUploading: false,
        isFetching: false,
    };
    inputProjectName: string = '';
    newInputProjectName: string = '';
    selectedProjectName: string = '';
    oldProjectName: string = '';
    form!: FormGroup;
    renameForm!: FormGroup;
    subject$: Subject<any> = new Subject();
    subjectSubscription?: Subscription;
    thumbnailList: BboxMetadata[] & PolyMetadata[] = [];
    labelList: string[] = [];
    unsubscribe$: Subject<any> = new Subject();
    isLoading = false;
    isOverlayOn = false;
    isImageUploading = false;
    isProjectLoading = false;
    isDeleteSuccess = false;
    projectName: string = '';
    imgLblMode: ImageLabellingMode = null;
    modalSpanMessage: string = '';
    modalImportProjectName: string = '';
    spanClass: string = '';
    labelPath: string = '';
    projectFolderPath: string = '';
    showLabelTooltip: boolean = false;
    unsupportedImageList: string[] = [];
    readonly modalIdCreateProject = 'modal-create-project';
    readonly modalIdRenameProject = 'modal-rename-project';
    readonly modalIdImportProject = 'modal-import-project';
    readonly modalIdDeleteProject = 'modal-delete-project';
    readonly modalIdRenameSuccess = 'modal-rename-success';
    readonly modalUnsupportedImage = 'modal-unsupported-image';
    createProjectModalBodyStyle: ModalBodyStyle = {
        minHeight: '45vh',
        minWidth: '31vw',
        maxWidth: '31vw',
        margin: '12vw 71vh',
        overflow: 'none',
    };
    renameProjectModalBodyStyle: ModalBodyStyle = {
        minHeight: '23vh',
        maxHeight: '25vh',
        minWidth: '31vw',
        maxWidth: '31vw',
        margin: '15vw 71vh',
        overflow: 'none',
    };
    importProjectModalBodyStyle: ModalBodyStyle = {
        minHeight: '15vh',
        maxHeight: '25vh',
        minWidth: '31vw',
        maxWidth: '31vw',
        margin: '15vw 71vh',
        overflow: 'none',
    };
    deleteProjectBodyStyle: ModalBodyStyle = {
        minHeight: '11vh',
        maxHeight: '11vh',
        minWidth: '31vw',
        maxWidth: '31vw',
        margin: '15vw 71vh',
        overflow: 'none',
    };
    renameSuccessBodyStyle: ModalBodyStyle = {
        minHeight: '11vh',
        maxHeight: '11vh',
        minWidth: '31vw',
        maxWidth: '31vw',
        margin: '15vw 71vh',
        overflow: 'none',
    };
    unsupportedImageBodyStyle: ModalBodyStyle = {
        minHeight: '18vh',
        maxHeight: '30vh',
        minWidth: '31vw',
        maxWidth: '31vw',
        margin: '15vw 71vh',
        overflow: 'none',
    };
    @ViewChild('refProjectName') _refProjectName!: ElementRef<HTMLInputElement>;
    @ViewChild('projectfoldername') _projectFoldername!: ElementRef<HTMLLabelElement>;
    @ViewChild('labeltextfilename') _labelTextFilename!: ElementRef<HTMLLabelElement>;
    @ViewChild('refNewProjectName') _refNewProjectName!: ElementRef<HTMLInputElement>;
    @ViewChild('jsonImportProjectFile') _jsonImportProjectFile!: ElementRef<HTMLInputElement>;
    @ViewChild('jsonImportProjectFilename') _jsonImportProjectFilename!: ElementRef<HTMLLabelElement>;

    constructor(
        private _fb: FormBuilder,
        private _router: Router,
        private _dataSetService: DataSetLayoutService,
        private _spinnerService: SpinnerService,
        private _imgLblModeService: ImageLabellingModeService,
        private _languageService: LanguageService,
        private _modalService: ModalService,
    ) {
        this._imgLblModeService.imgLabelMode$
            .pipe(distinctUntilChanged())
            .subscribe((modeVal) => (this.imgLblMode = modeVal));

        this._spinnerService
            .returnAsObservable()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((loading) => (this.isLoading = loading));

        this.createFormControls();
        this.renameFormControls();
        const langsArr: string[] = ['data-set-page-en', 'data-set-page-cn', 'data-set-page-ms'];
        this._languageService.initializeLanguage(`data-set-page`, langsArr);
    }

    ngOnInit(): void {
        this.showProjectList();
    }

    showProjectList = (): void => {
        this.projectList.isFetching = true;
        this._dataSetService
            .getProjectList()
            .pipe(first())
            .subscribe(({ content }) => {
                if (content) {
                    const clonedProjectList = cloneDeep(content);
                    // const sortedProject = clonedProjectList.sort((a, b) => (b.created_date > a.created_date ? 1 : -1));
                    const formattedProjectList = clonedProjectList.map((project) => {
                        const newProjectList = (project = {
                            ...project,
                            created_date: this.formatDate(project.created_date),
                        });
                        return newProjectList;
                    });
                    // console.log(formattedProjectList);
                    /**
                     * !! IMPORTANT
                     * @author Daniel Lim Heng Jie
                     * @description converted to ES6 style to trick Angular's Lifecycle
                     * to allow the bypass of it to always be unequal object compare during lifecyckle hooks checking (ngOnChanges)
                     * as comp "data-set-card" needs to check prop changes
                     * via ngOnChanges to run logic
                     */
                    this.projectList = {
                        ...this.projectList,
                        projects: formattedProjectList,
                        isFetching: false,
                    };
                }
            }),
            (error: Error) => {
                console.error(error);
                this.projectList.isFetching = false;
            };
    };

    formatDate = (date: string): string => {
        const initializedDate: Date = new Date(date);
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const actualMonth: string | undefined = monthNames.find(
            (_, i) => i === initializedDate.getMonth() || undefined,
        );

        return actualMonth ? `${actualMonth}-${initializedDate.getDate()}-${initializedDate.getFullYear()}` : 'Error';
    };

    createFormControls = (): void => {
        this.form = this._fb.group({
            projectName: ['', Validators.required],
        });
    };

    renameFormControls = (): void => {
        this.renameForm = this._fb.group({
            newProjectName: ['', Validators.required],
        });
    };

    onChange = (val: string): void => {
        this.inputProjectName = val;
    };

    onChangeRename = (val: string): void => {
        this.newInputProjectName = val;
    };

    toggleModalDisplay = (shown: boolean): void => {
        this._projectFoldername.nativeElement.innerHTML = '';
        this._labelTextFilename.nativeElement.innerHTML = '';
        shown && this.form.reset();
        shown
            ? this._modalService.open(this.modalIdCreateProject)
            : this._modalService.close(this.modalIdCreateProject);
        /** timeOut needed to allow focus due to Angular's templating sys issue / bug */
        // setTimeout(() => this._refProjectName.nativeElement.focus());
    };

    toggleRenameModalDisplay = (event?: ProjectRename): void => {
        if (!event) {
            this._modalService.close(this.modalIdRenameProject);
            return;
        }
        const { shown, projectName } = event;
        shown
            ? (this.renameForm.reset(), this._modalService.open(this.modalIdRenameProject))
            : this._modalService.close(this.modalIdRenameProject);
        this.oldProjectName = projectName;

        /** timeOut needed to allow focus due to Angular's templating sys issue / bug */
        // setTimeout(() => this._refNewProjectName.nativeElement.focus());
    };

    toggleImportProjectModalDisplay = (event: any): void => {
        this.modalSpanMessage = '';
        event
            ? this._modalService.open(this.modalIdImportProject)
            : this._modalService.close(this.modalIdImportProject);
    };

    onSelectImportProjectJson = (): void => {
        this.toggleImportProjectModalDisplay(true);
        const importStatus$ = this._dataSetService.importStatus();
        const importProject$ = this._dataSetService.importProject();
        importProject$
            .pipe(
                first(),
                map(({ message }) => message),
            )
            .subscribe((message) => {
                let refreshProjectList = false;
                interval(500)
                    .pipe(
                        switchMap(() => importStatus$),
                        first((response) => {
                            // console.log('RESPONSE IMPORT PROJECT MESSAGE', response);
                            // this.modalSpanMessage = response.error_message;
                            this.isOverlayOn =
                                response.file_system_status === 1 || response.file_system_status === 2 ? true : false;
                            if (
                                response.file_system_status === 0 ||
                                response.file_system_status === 3 ||
                                response.file_system_status === 5
                            ) {
                                refreshProjectList = true;
                            }

                            return refreshProjectList;
                        }),
                    )
                    .subscribe((response) => {
                        this.modalSpanMessage =
                            response.file_system_message === 'DATABASE_UPDATED' ? 'importSuccess' : 'importAborted';
                        this.modalImportProjectName =
                            response.file_system_message === 'DATABASE_UPDATED' && response.project_name
                                ? response.project_name
                                : '';
                        if (response.file_system_status === 5) {
                            this.processIsSuccess(false);
                        } else {
                            this.processIsSuccess(true);
                        }
                        this.showProjectList();
                    });
            });
    };

    processIsSuccess = (success: boolean): void => {
        if (success) {
            this.spanClass = 'validation-success';
        } else {
            this.spanClass = 'validation-error';
        }
    };

    importProject = (): void => {
        // console.log('IMPORT PROEJCT CLICKED');
        this.toggleImportProjectModalDisplay(true);
        // const importStatus$ = this._dataSetService.importStatus();
        // const importProject$ = this._dataSetService.importProject();
        // importProject$
        //     .pipe(
        //         first(),
        //         map(({ error_code }) => error_code),
        //     )
        //     .subscribe((message) => {
        //         let refreshProjectList = false;
        //         interval(500)
        //             .pipe(
        //                 switchMap(() => importStatus$),
        //                 first((response) => {
        //                     console.log("RESPONSE IMPORT PROJECT MESSAGE", response)
        //                     this.modalSpanMessage = response.error_message
        //                     this.isOverlayOn = response.error_code === 0 ? true : false;
        //                     if (response.error_code === 1 || response.error_code === 4) {
        //                         refreshProjectList = true;
        //                     }

        //                     return refreshProjectList;
        //                 }),
        //             )
        //             .subscribe((response) => {
        //                 this.getProjectList();
        //             });
        //     });
    };

    // onFileChange = ({ target: { files } }: HTMLElementEvent<HTMLInputElement>): void => {
    //     const filename = this._labelTextFile.nativeElement.files?.item(0)?.name;
    //     this._labelTextFilename.nativeElement.innerHTML = filename === undefined ? '' : filename;
    //     const reader = new FileReader();

    //     if (files && files.length) {
    //         const file = files.item(0);
    //         reader.onload = () => {
    //             // need to run CD since file load runs outside of zone
    //             this._cd.markForCheck();
    //         };
    //         reader.onloadend = () => {
    //             const labelResult = reader.result as string;
    //             const labelSplitArr = labelResult.split('\n');
    //             if (labelSplitArr.length > 0) {
    //                 const newLabelArray = labelSplitArr.reduce((prev: string[], curr: string) => {
    //                     const clearCharLabel = curr.replace(/[^A-Z0-9]+/gi, '').toLowerCase();
    //                     prev.push(clearCharLabel);
    //                     return prev;
    //                 }, []);
    //                 // clear entire array before giving it new set of data, prevents stacking more array of data
    //                 this.labelTextUpload = [];
    //                 // spread due to newLabelArray is already an array
    //                 // with push would lead to nested array
    //                 this.labelTextUpload.push(...newLabelArray);
    //                 // console.log(this.labelTextUpload);
    //             }
    //         };
    //         // console.log(file);
    //         file && reader.readAsText(file);
    //     }
    // };

    // onJSONFileChange = ({ target: { files } }: HTMLElementEvent<HTMLInputElement>): void => {
    //     const filename = this._jsonImportProjectFile.nativeElement.files?.item(0)?.name;
    //     this._jsonImportProjectFilename.nativeElement.innerHTML = filename === undefined ? '' : filename;
    //     const reader = new FileReader();

    //     if (files && files.length) {
    //         const file = files.item(0);
    //         reader.onload = () => {
    //             // need to run CD since file load runs outside of zone
    //             this._cd.markForCheck();
    //         };
    //         reader.onloadend = () => {
    //             const labelResult = reader.result as string;
    //             const labelSplitArr = labelResult.split('\n');
    //             if (labelSplitArr.length > 0) {
    //                 const newLabelArray = labelSplitArr.reduce((prev: string[], curr: string) => {
    //                     const clearCharLabel = curr.replace(/[^A-Z0-9]+/gi, '').toLowerCase();
    //                     prev.push(clearCharLabel);
    //                     return prev;
    //                 }, []);
    //                 // clear entire array before giving it new set of data, prevents stacking more array of data
    //                 this.labelTextUpload = [];
    //                 // spread due to newLabelArray is already an array
    //                 // with push would lead to nested array
    //                 this.labelTextUpload.push(...newLabelArray);
    //                 // console.log(this.labelTextUpload);
    //             }
    //         };
    //         // console.log(file);
    //         file && reader.readAsText(file);
    //     }
    // };

    onStarred = ({ projectName, starred }: StarredProps) => {
        this._dataSetService
            .updateProjectStatus(projectName, starred, 'star')
            .pipe(first())
            .subscribe(
                ({ message }) => console.log(message),
                (error: Error) =>
                    (this.projectList = {
                        isUploading: this.projectList.isUploading,
                        isFetching: this.projectList.isFetching,
                        projects: this.projectList.projects.map((project) =>
                            project.project_name === projectName
                                ? {
                                      ...project,
                                      is_starred: false,
                                  }
                                : project,
                        ),
                    }),
            );
    };

    onSubmit = (isNewProject: boolean, projectName?: string): void => {
        this.form.markAllAsTouched();

        if (!isNewProject) {
            projectName && this.startProject(projectName);
            // if (this.form.get('selectExistProject')?.value) {
            //     // this.startProject(this.form.get('selectExistProject')?.value);
            //     this.selectedProjectName = this.form.get('selectExistProject')?.value;
            // } else {
            //     this.form.get('selectExistProject')?.setErrors({ required: true });
            // }
        } else {
            if (this.inputProjectName) {
                const checkExistProject =
                    this.projectList.projects &&
                    this.projectList.projects.find(
                        (project) => project && project.project_name === this.inputProjectName,
                    );
                checkExistProject
                    ? (this.form.get('projectName')?.setErrors({ exist: true }),
                      this._refProjectName.nativeElement.focus())
                    : (this.createProject(this.inputProjectName),
                      (this.selectedProjectName = this.form.get('projectName')?.value));
            } else {
                this.form.get('projectName')?.setErrors({ required: true });
                this._refProjectName.nativeElement.focus();
            }
        }
    };

    onOpenImportProject = (isNewProject: boolean, projectName?: string): void => {
        console.log('BUTTON IMPORT CLICKED');
        // this.form.markAllAsTouched();

        // if (!isNewProject) {
        //     projectName ? this.startProject(projectName) : null;
        //     // if (this.form.get('selectExistProject')?.value) {
        //     //     // this.startProject(this.form.get('selectExistProject')?.value);
        //     //     this.selectedProjectName = this.form.get('selectExistProject')?.value;
        //     // } else {
        //     //     this.form.get('selectExistProject')?.setErrors({ required: true });
        //     // }
        // } else {
        //     if (this.inputProjectName) {
        //         const checkExistProject = this.projectList.projects
        //             ? this.projectList.projects.find((project) =>
        //                   project ? project.project_name === this.inputProjectName : null,
        //               )
        //             : null;
        //         checkExistProject
        //             ? (this.form.get('projectName')?.setErrors({ exist: true }),
        //               this._refProjectName.nativeElement.focus())
        //             : (this.createProject(this.inputProjectName),
        //               (this.selectedProjectName = this.form.get('projectName')?.value),
        //               (this.labelTextUpload = []),
        //               (this._labelTextFilename.nativeElement.innerHTML = ''));
        //     } else {
        //         this.form.get('projectName')?.setErrors({ required: true });
        //         this._refProjectName.nativeElement.focus();
        //     }
        // }
    };

    onSubmitRename() {
        this.renameForm.markAllAsTouched();
        if (this.newInputProjectName) {
            const checkExistProject =
                this.projectList.projects &&
                this.projectList.projects.find((project) =>
                    project ? project.project_name === this.newInputProjectName : null,
                );
            checkExistProject
                ? (this.renameForm.get('newProjectName')?.setErrors({ exist: true }),
                  this._refProjectName.nativeElement.focus())
                : (this.renameProject(this.oldProjectName, this.newInputProjectName),
                  (this.selectedProjectName = this.renameForm.get('newProjectName')?.value));
        } else {
            this.renameForm.get('newProjectName')?.setErrors({ required: true });
            this._refProjectName.nativeElement.focus();
        }
    }

    startProject = (projectName: string): void => {
        this._router.navigate([`imglabel/${this.imgLblMode}`], {
            state: { projectName },
        });
    };

    isCreateFormIncomplete() {
        return this.inputProjectName === '' || this.projectFolderPath === '';
    }

    createProject = (projectName: string): void => {
        const createProj$ = this._dataSetService.createNewProject(projectName, this.labelPath, this.projectFolderPath);
        const uploadStatus$ = this._dataSetService.localUploadStatus(projectName);
        let numberOfReq: number = 0;

        const returnResponse = ({ message }: Message): Observable<MessageUploadStatus> => {
            return message === 1
                ? interval(500).pipe(
                      mergeMap(() => uploadStatus$),
                      /** @property {number} message value 4 means upload completed, value 1 means cancelled */
                      first(({ file_system_status, unsupported_image_list }) => {
                          this.unsupportedImageList = unsupported_image_list;
                          this.isOverlayOn = file_system_status === 1 || file_system_status === 2 ? true : false;
                          this.isImageUploading = file_system_status === 2 ? true : false;
                          const isValidResponse: boolean = file_system_status === 3;
                          return isValidResponse;
                      }),
                  )
                : throwError((error: any) => {
                      console.error(error);
                      this.projectList = { ...this.projectList, isUploading: false };
                      return error;
                  });
        };
        this.projectList = { ...this.projectList, isUploading: true };
        this.subjectSubscription = this.subject$
            .pipe(
                first(),
                mergeMap(() => createProj$),
                mergeMap((message) => returnResponse(message)),
            )
            .subscribe(
                (res) => {
                    if (res.file_system_status === 3) {
                        this.toggleModalDisplay(false);
                    }
                    this.isProjectLoading = true;
                    numberOfReq = res ? --numberOfReq : numberOfReq;
                    numberOfReq < 1 && (this.projectList = { ...this.projectList, isUploading: false });
                },
                (error: Error) => {},
                () => {
                    this.isProjectLoading = false;
                    this.showProjectList();
                    this.unsupportedImageList.length > 0 &&
                        this._dataSetService
                            .downloadUnsupportedImageList(projectName, this.unsupportedImageList)
                            .then((res) => {
                                res && this._modalService.open(this.modalUnsupportedImage);
                            });
                },
            );

        // make initial call
        this.subject$.next();
    };

    selectProjectFolder() {
        const importProjectFolderStatus$ = this._dataSetService.importProjectFolderStatus();
        const importProjectFolder$ = this._dataSetService.importProjectFolder();
        importProjectFolder$
            .pipe(
                first(),
                map(({ message }) => message),
            )
            .subscribe((message) => {
                let windowClosed = false;
                interval(500)
                    .pipe(
                        switchMap(() => importProjectFolderStatus$),
                        first((response) => {
                            this.isOverlayOn = response.window_status === 0 ? true : false;
                            if (response.window_status === 1 && response.project_path !== '') {
                                this._projectFoldername.nativeElement.innerHTML = response.project_path.replace(
                                    /^.*[\\\/]/,
                                    '',
                                );
                                this.projectFolderPath = response.project_path;
                            }
                            if (response.window_status === 1) {
                                windowClosed = true;
                            }
                            return windowClosed;
                        }),
                    )
                    .subscribe((response) => {
                        this.showProjectList();
                    });
            });
    }

    importLabelFile() {
        const importLabelFileStatus$ = this._dataSetService.importLabelFileStatus();
        const importLabelFile$ = this._dataSetService.importLabelFile();
        importLabelFile$
            .pipe(
                first(),
                map(({ message }) => message),
            )
            .subscribe((message) => {
                let windowClosed = false;
                interval(500)
                    .pipe(
                        switchMap(() => importLabelFileStatus$),
                        first((response) => {
                            this.isOverlayOn = response.window_status === 0 ? true : false;
                            if (response.window_status === 1 && response.label_file_path !== '') {
                                this._labelTextFilename.nativeElement.innerHTML = response.label_file_path.replace(
                                    /^.*[\\\/]/,
                                    '',
                                );
                                this.labelPath = response.label_file_path;
                            }
                            if (response.window_status === 1) {
                                windowClosed = true;
                            }
                            return windowClosed;
                        }),
                    )
                    .subscribe((response) => {
                        this.showProjectList();
                    });
            });
    }

    renameProject = (oldProjectName: string, newProjectName: string): void => {
        const renameProject$ = this._dataSetService.renameProject(oldProjectName, newProjectName);

        renameProject$
            .pipe(
                first(),
                map(({ message }) => message),
            )
            .subscribe((message) => {
                if (message === 1) {
                    this._languageService._translate.get('renameSuccess').subscribe((translated) => {
                        // alert(oldProjectName + ' ' + translated);
                        this.projectName = oldProjectName;
                        this.modalSpanMessage = translated;
                        this._modalService.open(this.modalIdRenameSuccess);
                    });
                    this.showProjectList();
                    this.toggleRenameModalDisplay();
                }
            });
    };

    deleteProject = (projectName: string): void => {
        const deleteProj$ = this._dataSetService.deleteProject(projectName);

        deleteProj$
            .pipe(
                first(),
                map(({ message }) => message),
            )
            .subscribe((message) => {
                if (message === 1) {
                    this._languageService._translate.get('deleteSuccess').subscribe((translated) => {
                        this.isDeleteSuccess = true;
                        this.projectName = projectName;
                        this._modalService.open(this.modalIdDeleteProject);
                    });
                    this.showProjectList();
                }
            });
    };

    @HostListener('window:keydown', ['$event'])
    keyDownEvent = ({ key }: KeyboardEvent): void => {
        key === 'Escape' && this.toggleRenameModalDisplay() && this.toggleModalDisplay(false);
    };

    /** @event fires whenever browser is closing */
    @HostListener('window:beforeunload', ['$event'])
    onWindowClose(event: BeforeUnloadEvent): void {
        event.preventDefault();
        if (this.isProjectLoading) {
            event.returnValue = 'Are you sure you want to leave this page?';
        }
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
