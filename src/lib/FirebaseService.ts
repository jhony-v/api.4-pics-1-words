import firebase from "firebase-admin";
import { joinPath } from "../utils/helpers";
import FirebaseBase from "./FirebaseBase";
export type FireDataBase = firebase.database.Database;

type Reference = firebase.database.Reference;

export default class FirebaseService {
  private name: string;
  protected db: FireDataBase;

  constructor(name: string) {
    this.db = new FirebaseBase().database();
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
