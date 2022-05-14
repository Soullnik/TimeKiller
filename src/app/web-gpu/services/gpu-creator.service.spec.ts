import { TestBed } from '@angular/core/testing';

import { GpuCreatorService } from './gpu-creator.service';

describe('GpuCreatorService', () => {
  let service: GpuCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GpuCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
