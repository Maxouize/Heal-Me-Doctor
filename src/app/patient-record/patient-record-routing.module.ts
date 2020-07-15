import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientRecordPage } from './patient-record.page';

const routes: Routes = [
  {
    path: '',
    component: PatientRecordPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRecordPageRoutingModule {}
