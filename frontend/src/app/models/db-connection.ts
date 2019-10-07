export class DBConnection {
  connection: string;
  driver: string;

  constructor(
    connection?: string,
    driver?: string,
  ) {
    this.connection  = connection || null;
    this.driver      = driver || null;
  }
}
