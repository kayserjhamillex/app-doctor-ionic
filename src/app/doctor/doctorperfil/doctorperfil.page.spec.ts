import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorperfilPage } from './doctorperfil.page';

describe('DoctorperfilPage', () => {
  let component: DoctorperfilPage;
  let fixture: ComponentFixture<DoctorperfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorperfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
