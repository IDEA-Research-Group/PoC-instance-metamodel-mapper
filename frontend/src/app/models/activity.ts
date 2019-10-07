import {MatchingActivityInstance} from './matching-activity-instance';

export class Activity {
  id: number;
  uuid: string;
  name: string;
  description: string;
  matching?: MatchingActivityInstance;
  process_definition_id: number;
  created_at: string;
  updated_at: string;

  constructor(
      id?: number,
      uuid?: string,
      name?: string,
      description?: string,
      matching?: MatchingActivityInstance,
      process_definition_id?: number,
      created_at?: string,
      updated_at?: string,
  ) {
      this.id                     = id || null;
      this.uuid                   = uuid || null;
      this.name                   = name || null;
      this.description            = description || null;
      this.matching = matching || new MatchingActivityInstance();
      this.process_definition_id  = process_definition_id || null;
      this.created_at             = created_at || null;
      this.updated_at             = updated_at || null;
  }
}
