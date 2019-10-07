import {DBConnection} from './db-connection';
import {MatchedField} from './matched-field';



export class MatchingProcessInstance {
  connection: DBConnection;
  principal_table: string;
  id: MatchedField;
  ended: MatchedField;
  suspended: MatchedField;
  businessKey: MatchedField;
  startUserId: MatchedField;
  durationInMillis: MatchedField;
  startTime: MatchedField;
  endTime: MatchedField;

  constructor(
    connection?: DBConnection,
    principal_table?: string,
    id?: MatchedField,
    ended?: MatchedField,
    suspended?: MatchedField,
    businessKey?: MatchedField,
    startUserId?: MatchedField,
    durationInMillis?: MatchedField,
    startTime?: MatchedField,
    endTime?: MatchedField,
  ) {
    this.connection = connection  || new DBConnection();
    this.principal_table = principal_table  || null;
    this.id = id  || new MatchedField();
    this.ended = ended  || new MatchedField();
    this.suspended = suspended  || new MatchedField();
    this.businessKey = businessKey  || new MatchedField();
    this.startUserId = startUserId  || new MatchedField();
    this.durationInMillis = durationInMillis  || new MatchedField();
    this.startTime = startTime  || new MatchedField();
    this.endTime = endTime  || new MatchedField();
  }
}
