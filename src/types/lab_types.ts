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
    tipo:string,
}

export type Usuarios = {
    cpf: string,
    nome: string,
    rg:string,
    telefone:string | string[],
    logradouro:string,
    email:string,
    senha:string
}

export type Rm = { rm: number, cpf:Usuarios }
export type Professores = { rm: number, cpf:Usuarios }
export type Cordenadores = { id?: number, rm:Professores }
export type Manutencoes = { data_man: Date, descricao:string, docente:Rm, pecas:Estoque[] }

export interface Estoque { 
    num_serie:number, 
    modelo:string, 
    nome:string, 
    marca:string,
    data_entrada:Data,
    data_saida?:Data,
    qtd:number
}