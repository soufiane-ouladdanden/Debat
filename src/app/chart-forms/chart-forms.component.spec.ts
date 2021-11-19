import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartFormsComponent } from './chart-forms.component';

describe('ChartFormsComponent', () => {
  let component: ChartFormsComponent;
  let fixture: ComponentFixture<ChartFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
