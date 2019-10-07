
export class MatchedField {
  table_name: string;
  column_name: string;
  data_type: string;

  constructor(
    table_name?: string,
    column_name?: string,
    data_type?: string,
  ) {
    this.table_name   = table_name || null;
    this.column_name  = column_name || null;
    this.data_type    = data_type || null;
  }
}
