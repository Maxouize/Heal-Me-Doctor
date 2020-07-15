import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PatientRecordPage } from './patient-record.page';

describe('patient-recordPage', () => {
  let component: PatientRecordPage;
  let fixture: ComponentFixture<PatientRecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientRecordPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
