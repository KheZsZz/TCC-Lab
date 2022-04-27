export type Users=  {
    id?:number;
    address?:number;
    corparate?:number;
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