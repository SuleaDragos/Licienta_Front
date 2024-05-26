import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentationLicensePlateComponent } from './representation-license-plate.component';

describe('RepresentationLicensePlateComponent', () => {
  let component: RepresentationLicensePlateComponent;
  let fixture: ComponentFixture<RepresentationLicensePlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepresentationLicensePlateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepresentationLicensePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
