import { TestBed, inject } from '@angular/core/testing';

import { ProcessInstancesService } from './process-instances.service';

describe('ProcessInstancesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessInstancesService]
    });
  });

  it('should be created', inject([ProcessInstancesService], (service: ProcessInstancesService) => {
    expect(service).toBeTruthy();
  }));
});
