import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { VisitPage } from './visit.page';

describe('visitPage', () => {
  let component: VisitPage;
  let fixture: ComponentFixture<VisitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VisitPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(VisitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
