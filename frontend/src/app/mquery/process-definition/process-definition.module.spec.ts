import { ProcessDefinitionModule } from './process-definition.module';

describe('ProcessDefinitionModule', () => {
  let processDefinitionModule: ProcessDefinitionModule;

  beforeEach(() => {
    processDefinitionModule = new ProcessDefinitionModule();
  });

  it('should create an instance', () => {
    expect(processDefinitionModule).toBeTruthy();
  });
});
