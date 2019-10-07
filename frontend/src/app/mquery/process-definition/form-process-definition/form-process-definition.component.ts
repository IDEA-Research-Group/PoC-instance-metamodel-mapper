import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProcessDefinition} from '../../../models/processDefinition';
import {ProcessEngine} from '../../../models/processEngine';
import {DatabasesService} from '../../../services/databases/databases.service';
import {DBConnection} from '../../../models/db-connection';
import {MatchedField} from '../../../models/matched-field';

@Component({
  selector: 'ngx-form-process-definition',
  templateUrl: './form-process-definition.component.html',
  styleUrls: ['./form-process-definition.component.scss'],
})
export class FormProcessDefinitionComponent implements OnInit, OnChanges {

  @Input() processDefinition: ProcessDefinition;
  @Input() processesEngines: ProcessEngine[];
  connections: DBConnection[];
  @Input() connection_selected: DBConnection;
  tables: string[];
  @Input() table_selected: string;
  tables_fields: any[];
  constructor(
    private databasesService: DatabasesService,
  ) { }

  ngOnInit() {
    console.info(this.processDefinition);
    console.info(this.processesEngines);
    this.getConnections();
  }

  getConnections() {
    this.databasesService.getDbConnections()
      .subscribe(res => {
        this.connections = res.data.connections;
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['connection_selected']) {
      this.getAllTablesFields();
    }
  }

  getAllTablesFields() {
    this.processDefinition.matching.connection = this.connection_selected;
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
    this.processDefinition.matching.principal_table = this.table_selected;
  }

  compareConnections(connectionFirst: DBConnection, connectionSecond: DBConnection) {
    if (!connectionSecond)
      return false;
    return connectionFirst.driver == connectionSecond.driver && connectionFirst.connection == connectionSecond.connection;
  }

  compareFields(fieldFirst: MatchedField, fieldSecond: MatchedField) {
    if (!fieldSecond)
      return false;
    return fieldFirst.column_name == fieldSecond.column_name
      && fieldFirst.data_type == fieldSecond.data_type
      && fieldFirst.table_name == fieldSecond.table_name;
  }



}
