import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensePlateTableComponent } from './license-plate-table.component';

describe('LicensePlateTableComponent', () => {
  let component: LicensePlateTableComponent;
  let fixture: ComponentFixture<LicensePlateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicensePlateTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicensePlateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
