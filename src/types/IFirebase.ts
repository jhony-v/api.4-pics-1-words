import firebase from "firebase-admin";

export type FireDataBase = firebase.database.Database;

export interface IPagination {
  start?: number;
  limit?: number;
  end?: number;
}
