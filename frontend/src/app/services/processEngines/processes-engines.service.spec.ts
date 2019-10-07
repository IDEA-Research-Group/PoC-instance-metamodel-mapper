import { TestBed, inject } from '@angular/core/testing';

import { ProcessesEnginesService } from './processes-engines.service';

describe('ProcessesEnginesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessesEnginesService],
    });
  });

  it('should be created', inject([ProcessesEnginesService], (service: ProcessesEnginesService) => {
    expect(service).toBeTruthy();
  }));
});
