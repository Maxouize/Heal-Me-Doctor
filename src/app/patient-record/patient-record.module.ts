import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientRecordPage } from './patient-record.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PatientRecordPageRoutingModule } from './patient-record-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: PatientRecordPage }]),
    PatientRecordPageRoutingModule,
  ],
  declarations: [PatientRecordPage]
})
export class PatientRecordPageModule {}
