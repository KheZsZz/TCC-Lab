import { Users } from "./types_users";

export type Inventory = { // Estoque
    id?:number,
    sector:string,
    fk_user:Users
}

export interface Assets { // Patrimonios
    id?:number,
    property_number:number,
    property_serial_number:string,
    name:string,
    brand:string,
    model:string,
    lot:number,
    nf:number,
    complement:string,
    value_property:number,
}

export type ErrorAssets = {
    message:Error | string
}