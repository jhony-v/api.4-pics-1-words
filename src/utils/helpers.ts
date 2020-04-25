import { IStatus } from "../types/IStatus";

export const status = (error : any) : IStatus => {
    return { status : ( error ? false : true ) }
}

export const createKeyDocument = (type:string,db : firebase.database.Database) : string => {
   return type+db.ref(type).push().key;
}

