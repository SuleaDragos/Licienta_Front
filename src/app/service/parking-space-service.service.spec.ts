import { TestBed } from '@angular/core/testing';

import { ParkingSpaceServiceService } from './parking-space-service.service';

describe('ParkingSpaceServiceService', () => {
  let service: ParkingSpaceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingSpaceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
