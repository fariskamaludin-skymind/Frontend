/**
 * @license
 * Use of this source code is governed by Apache License 2.0 that can be
 * found in the LICENSE file at https://github.com/CertifaiAI/Classifai_FrontEnd/blob/main/LICENSE
 */

import { CommonModule } from '@angular/common';
import { DataSetCardComponent } from 'src/components/data-set/data-set-card/data-set-card.component';
import { DataSetHeaderComponent } from 'src/components/data-set/data-set-header/data-set-header.component';
import { DataSetLayoutComponent } from './data-set-layout.component';
import { DataSetRoutingModule } from './data-set-layout-routing.module';
import { DataSetSideMenuComponent } from 'src/components/data-set/data-set-side-menu/data-set-side-menu.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
    imports: [CommonModule, SharedModule, DataSetRoutingModule],
    declarations: [DataSetLayoutComponent, DataSetSideMenuComponent, DataSetHeaderComponent, DataSetCardComponent],
})
export class DataSetLayoutModule {}
