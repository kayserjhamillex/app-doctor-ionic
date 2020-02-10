import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorcitasPage } from './doctorcitas.page';

describe('DoctorcitasPage', () => {
  let component: DoctorcitasPage;
  let fixture: ComponentFixture<DoctorcitasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorcitasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorcitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
