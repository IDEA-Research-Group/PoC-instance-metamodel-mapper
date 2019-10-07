import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Activity} from '../../../models/activity';
import {ProcessDefinition} from '../../../models/processDefinition';
import {DBConnection} from '../../../models/db-connection';
import {DatabasesService} from '../../../services/databases/databases.service';
import {MatchedField} from '../../../models/matched-field';

@Component({
  selector: 'ngx-form-activity',
  templateUrl: './form-activity.component.html',
  styleUrls: ['./form-activity.component.scss']
})
export class FormActivityComponent implements OnInit, OnChanges {

  @Input() activity: Activity;
  @Input() processDefinitions: ProcessDefinition[];
  @Input() onSubmit: Function;

  connections: DBConnection[];
  @Input() connection_selected: DBConnection;
  tables: string[];
  @Input() table_selected: string;
  tables_fields: any[];

  constructor(
    private databasesService: DatabasesService,
  ) { }

  ngOnInit() {
    console.info(this.processDefinitions);
    this.getConnections();
  }
  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['connection_selected']) {
      this.getAllTablesFields();
    }
  }
  getConnections() {
    this.databasesService.getDbConnections()
      .subscribe(res => {
        this.connections = res.data.connections;
      });
  }

  getAllTablesFields() {
    this.activity.matching.connection = this.connection_selected;
    this.databasesService.getAllTablesFields(this.connection_selected)
      .subscribe(res => {
        console.warn(res);
        this.tables_fields = res.data.tables;
        console.info(res.data.tables);
        this.tables = Object.keys(res.data.tables);
        console.info(Object.keys(res.data.tables));
      });
  }

  setProcesstable() {
    this.activity.matching.principal_table = this.table_selected;
  }

  compareConnections(connectionFirst: DBConnection, connectionSecond: DBConnection) {
    if (!connectionSecond)
      return false;
    return connectionFirst.driver == connectionSecond.driver && connectionFirst.connection == connectionSecond.connection;
  }

  compareFields(fieldFirst: MatchedField, fieldSecond: MatchedField) {
    if (!fieldSecond)
      return false;
    return fieldFirst.column_name === fieldSecond.column_name
      && fieldFirst.data_type === fieldSecond.data_type
      && fieldFirst.table_name === fieldSecond.table_name;
  }



}
