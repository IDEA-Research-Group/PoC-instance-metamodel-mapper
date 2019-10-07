import { MqueryModule } from './mquery.module';

describe('MqueryModule', () => {
  let mqueryModule: MqueryModule;

  beforeEach(() => {
    mqueryModule = new MqueryModule();
  });

  it('should create an instance', () => {
    expect(mqueryModule).toBeTruthy();
  });
});
