import { TestBed } from '@angular/core/testing';

import { AdddeviceService } from './adddevice.service';

describe('ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdddeviceService = TestBed.get(AdddeviceService);
    expect(service).toBeTruthy();
  });
});
