export type Data = { 
    data: unknown | string | string[]; 
    sucess:boolean; 
}

export type Error = {
    error:string; 
    sucess:boolean;
}

export type Laboratorio = {
    id?:number,
    nome:string,
    tipo:string
}