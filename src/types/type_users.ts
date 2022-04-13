import { Adress, Institution } from "./types_Institution";

export interface Users {
    id?:number;
    name:string;
    last_name:string;
    email:string;
    password:string;
    cpf:string;
    rg: string;
    phone:string;
    address:Adress;
    corparate:Institution;
}

export interface Employee extends Users {
    id?:number;
    rm:number;
    role:string;
}

export interface Student extends Users {
    id?:number,
    ra:number
}