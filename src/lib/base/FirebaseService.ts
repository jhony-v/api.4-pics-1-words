import firebase from "firebase-admin";
import { joinPath } from "../utils/helpers";
import { database } from "./FirebaseBase";

export interface Status {
  status: boolean;
}

export type FireDataBase = firebase.database.Database;
export type Reference = firebase.database.Reference;

export default class FirebaseService {
  protected name: string;
  protected db: FireDataBase;

  constructor(name: string) {
    this.db = database;
    this.name = name;
  }

  ref(...parameters: string[]): Reference {
    let joinParameters = joinPath([this.name, ...parameters]);
    return this.db.ref(joinParameters);
  }

  createKey(): string {
    return this.name + this.ref(this.name).push().key;
  }

  status(status: boolean): Status {
    return {
      status,
    };
  }
}
