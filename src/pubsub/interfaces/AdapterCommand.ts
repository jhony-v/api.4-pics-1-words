export interface AdapterCommandInsert {
  insert(key: string, values: string): Promise<string>;
}

export interface AdapterCommandDelete {
  delete(key: string): Promise<string>;
}
