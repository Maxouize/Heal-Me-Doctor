import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlanningPage } from './planning.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PlanningPageRoutingModule } from './planning-routing.module';
import { TableComponent } from '../components/table/table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PlanningPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [
    PlanningPage,
    TableComponent
  ]
})
export class PlanningPageModule {}
