import { TestBed, inject } from '@angular/core/testing';

import { ActivitiesInstancesService } from './activities-instances.service';

describe('ActivitiesInstancesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivitiesInstancesService]
    });
  });

  it('should be created', inject([ActivitiesInstancesService], (service: ActivitiesInstancesService) => {
    expect(service).toBeTruthy();
  }));
});
