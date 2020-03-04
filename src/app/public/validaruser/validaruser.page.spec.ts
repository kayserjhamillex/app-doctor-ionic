import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidaruserPage } from './validaruser.page';

describe('ValidaruserPage', () => {
  let component: ValidaruserPage;
  let fixture: ComponentFixture<ValidaruserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidaruserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidaruserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
