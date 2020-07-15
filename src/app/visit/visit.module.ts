import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VisitPage } from './visit.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { VisitPageRoutingModule } from './visit-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    VisitPageRoutingModule
  ],
  declarations: [VisitPage]
})
export class VisitPageModule {}
