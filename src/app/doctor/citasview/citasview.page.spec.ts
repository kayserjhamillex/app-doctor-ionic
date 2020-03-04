import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CitasviewPage } from './citasview.page';

describe('CitasviewPage', () => {
  let component: CitasviewPage;
  let fixture: ComponentFixture<CitasviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CitasviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
