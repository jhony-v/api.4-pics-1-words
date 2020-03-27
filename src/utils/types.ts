export interface IUser {
    iduser ?: string;
    username ?: string;
    pass ?: string;
}


export interface  IWord { 
    idword ?: number;
    iduser ?: string;
    letter ?: string;
    images ?: [string];
}

export interface ICreate {
    type : string;
}

export interface IActions<T>{
    getProperties(properties : T): T;
    create?(properties: T, requestAnswer : Function) : any;
    update?(properties: T, requestAnswer : Function) : any;
    delete?(properties: T, requestAnswer : Function) : any;
    readAll(requestAnswer : Function) : any;    
}

export interface IStatus {
    status : boolean
}

