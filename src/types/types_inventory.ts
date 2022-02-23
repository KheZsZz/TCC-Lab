import { Users } from "./types_users";

export type Inventory = { // Estoque
    id?:number,
    sector:string,
    fk_user:Users
}

export interface Assets { // Patrimonios
    id?:number,
    assets_number:number,
    serial_number:string,
    name:string,
    brand:string,
    model:string,
    lot_number:number
}

export type ErrorAssets = {
    message:Error | string
}