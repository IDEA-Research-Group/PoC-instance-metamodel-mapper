export class ProcessEngine {
  id: number;
  uuid: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;

  constructor(
      id?: number,
      uuid?: string,
      name?: string,
      description?: string,
      created_at?: string,
      updated_at?: string,
  ) {
      this.id           = id || null;
      this.uuid         = uuid || null;
      this.name         = name || null;
      this.description  = description || null;
      this.created_at   = created_at || null;
      this.updated_at   = updated_at || null;
  }
}
