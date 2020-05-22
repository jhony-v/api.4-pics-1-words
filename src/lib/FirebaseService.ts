import firebase from "firebase-admin";
import app from "../config/firebase";
import { joinPath } from "../utils/helpers";
export type FireDataBase = firebase.database.Database;

type Reference = firebase.database.Reference;

export default class FirebaseService {
  private name: string;
  protected db: FireDataBase;

  constructor(name: string) {
    this.db = app.database();
    this.name = name;
  }

  ref(...parameters: string[]): Reference {
    let joinParameters = joinPath([this.name, ...parameters]);
    return this.db.ref(joinParameters);
  }

  createKey(): string {
    return this.name + this.ref(this.name).push().key;
  }
}
