import { ProcessEnginesModule } from './process-engines.module';

describe('ProcessEnginesModule', () => {
  let processEnginesModule: ProcessEnginesModule;

  beforeEach(() => {
    processEnginesModule = new ProcessEnginesModule();
  });

  it('should create an instance', () => {
    expect(processEnginesModule).toBeTruthy();
  });
});
