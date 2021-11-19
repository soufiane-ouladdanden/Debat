import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebatguideComponent } from './debatguide.component';

describe('DebatguideComponent', () => {
  let component: DebatguideComponent;
  let fixture: ComponentFixture<DebatguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebatguideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebatguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
