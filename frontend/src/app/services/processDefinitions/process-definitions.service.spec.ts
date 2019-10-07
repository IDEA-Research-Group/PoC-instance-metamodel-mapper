import { TestBed, inject } from '@angular/core/testing';

import { ProcessDefinitionsService } from './process-definitions.service';

describe('ProcessDefinitionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessDefinitionsService],
    });
  });

  it('should be created', inject([ProcessDefinitionsService], (service: ProcessDefinitionsService) => {
    expect(service).toBeTruthy();
  }));
});
