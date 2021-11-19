import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebatlibreComponent } from './debatlibre.component';

describe('DebatlibreComponent', () => {
  let component: DebatlibreComponent;
  let fixture: ComponentFixture<DebatlibreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebatlibreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebatlibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
