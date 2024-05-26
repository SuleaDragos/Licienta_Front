import { TestBed } from '@angular/core/testing';

import { LicensePlateServiceService } from './license-plate-service.service';

describe('LicensePlateServiceService', () => {
  let service: LicensePlateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicensePlateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
