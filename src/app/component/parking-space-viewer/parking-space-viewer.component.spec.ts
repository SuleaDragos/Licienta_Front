import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSpaceViewerComponent } from './parking-space-viewer.component';

describe('ParkingSpaceViewerComponent', () => {
  let component: ParkingSpaceViewerComponent;
  let fixture: ComponentFixture<ParkingSpaceViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingSpaceViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingSpaceViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
