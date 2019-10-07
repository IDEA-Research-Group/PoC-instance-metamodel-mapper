import { ProcessInstancesModule } from './process-instances.module';

describe('ProcessInstancesModule', () => {
  let processInstancesModule: ProcessInstancesModule;

  beforeEach(() => {
    processInstancesModule = new ProcessInstancesModule();
  });

  it('should create an instance', () => {
    expect(processInstancesModule).toBeTruthy();
  });
});
