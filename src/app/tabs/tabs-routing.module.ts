import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'visit',
        loadChildren: () => import('../visit/visit.module').then(m => m.VisitPageModule)
      },
      {
        path: 'planning',
        loadChildren: () => import('../planning/planning.module').then(m => m.PlanningPageModule)
      },
      {
        path: 'patient-record',
        loadChildren: () => import('../patient-record/patient-record.module').then(m => m.PatientRecordPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/visit',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/visit',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
