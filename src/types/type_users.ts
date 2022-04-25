import { Adress, Institution } from "./types_Institution";

export interface Users {
    id?:number;
    address?:Adress;
    corparate?:Institution;
    name:string;
    last_name:string;
    cpf:string;
    rg: string;
    phone:string;
    email:string;
    password:string;
    verify:number;
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