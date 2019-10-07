import {DBConnection} from './db-connection';
import {MatchedField} from './matched-field';


export class MatchingActivityInstance {
  connection: DBConnection;
  principal_table: string;
  process_fk: MatchedField;
  id: MatchedField;
  name: MatchedField;
  startTime: MatchedField;
  endTime: MatchedField;
  duration: MatchedField;
  canceled: MatchedField;
  completedScope: MatchedField;
  assignee: MatchedField;

  constructor(
  connection?: DBConnection,
  principal_table?: string,
  process_fk?: MatchedField,
  id?: MatchedField,
  name?: MatchedField,
  startTime?: MatchedField,
  endTime?: MatchedField,
  duration?: MatchedField,
  canceled?: MatchedField,
  completedScope?: MatchedField,
  assignee?: MatchedField,
  ) {
      this.connection = connection  || new DBConnection();
      this.principal_table = principal_table  || null;
      this.process_fk = process_fk  || new MatchedField();
      this.id = id  || new MatchedField();
      this.name = name  || new MatchedField();
      this.startTime = startTime  || new MatchedField();
      this.endTime = endTime  || new MatchedField();
      this.duration = duration  || new MatchedField();
      this.canceled = canceled  || new MatchedField();
      this.completedScope = completedScope  || new MatchedField();
      this.assignee = assignee  || new MatchedField();
  }
}
