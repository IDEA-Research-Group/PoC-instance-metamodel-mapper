import {MatchingProcessInstance} from './matching-process-instance';

export class ProcessDefinition {
  id: number;
  uuid: string;
  key: string;
  name: string;
  description: string;
  category: string;
  version: string;
  suspended: boolean;
  matching: MatchingProcessInstance;
  process_engine_id: number;
  created_at: string;
  updated_at: string;

  constructor(
      id?: number,
      uuid?: string,
      key?: string,
      name?: string,
      description?: string,
      category?: string,
      version?: string,
      suspended?: boolean,
      matching?: MatchingProcessInstance,
      process_engine_id?: number,
      created_at?: string,
      updated_at?: string,
  ) {
      this.id           = id || null;
      this.uuid         = uuid || '';
      this.key = key || '';
      this.name         = name || '';
      this.description  = description || '';
      this.category = category || '';
      this.version = version || '';
      this.suspended = suspended || false;
      this.matching = matching || new MatchingProcessInstance();
      this.process_engine_id = process_engine_id || null;
      this.created_at   = created_at || null;
      this.updated_at   = updated_at || null;
  }
}
