import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajeraComponent } from './cajera.component';

describe('CajeraComponent', () => {
  let component: CajeraComponent;
  let fixture: ComponentFixture<CajeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
