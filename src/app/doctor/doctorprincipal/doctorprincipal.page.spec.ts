import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorprincipalPage } from './doctorprincipal.page';

describe('DoctorprincipalPage', () => {
  let component: DoctorprincipalPage;
  let fixture: ComponentFixture<DoctorprincipalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorprincipalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorprincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
