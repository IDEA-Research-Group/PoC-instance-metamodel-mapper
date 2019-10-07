import { ActivitiesInstancesModule } from './activities-instances.module';

describe('ActivitiesInstancesModule', () => {
  let activitiesInstancesModule: ActivitiesInstancesModule;

  beforeEach(() => {
    activitiesInstancesModule = new ActivitiesInstancesModule();
  });

  it('should create an instance', () => {
    expect(activitiesInstancesModule).toBeTruthy();
  });
});
