import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TousdebatsComponent } from './tousdebats.component';

describe('TousdebatsComponent', () => {
  let component: TousdebatsComponent;
  let fixture: ComponentFixture<TousdebatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TousdebatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TousdebatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
