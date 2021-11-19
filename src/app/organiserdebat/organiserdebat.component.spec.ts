import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiserdebatComponent } from './organiserdebat.component';

describe('OrganiserdebatComponent', () => {
  let component: OrganiserdebatComponent;
  let fixture: ComponentFixture<OrganiserdebatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganiserdebatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganiserdebatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
