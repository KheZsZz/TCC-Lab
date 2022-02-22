import { Adress, Institution } from "./types_lab";

export interface Users {
    id_user?:number;
    name:string;
    last_name:string;
    email:string;
    password:string;
    cpf:string;
    rg: string;
    phone:string;
    rm:number;
    address:Adress;
    institution:Institution;
}

export interface Teacher extends Users {
    id_teacher?:number;
    is_coordinator:boolean;
    is_docent:boolean;
}

export interface Student extends Users { id_aluno?:number; }