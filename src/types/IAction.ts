export interface ICreate {
    type : string;
}

export interface IActions<T>{
    create?(properties: T, requestAnswer : Function) : any;
    update?(properties: T, requestAnswer : Function) : any;
    delete?(properties: T, requestAnswer : Function) : any;
    readAll(requestAnswer : Function) : any;    
}