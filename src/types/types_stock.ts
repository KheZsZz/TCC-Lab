import { Users } from "./type_users";

export type Stock = { // Estoque
    id?:number,
    sector:string,
    fk_user:Users
}

export interface Assents { // Patrimonios
    id?:number,
    assent_number:number,
    serial_number:string,
    assent_name:string,
    brand:string,
    model:string,
    product_batch:number,
    tax_invoice:number,
    complement:string,
    value_assent:number,
}

export type ErrorAssets = {
    message:Error | string
}