
export type Adress = {
    id?:number;
    type:string;
    public_place:string;
    number:number;
    neighborhood:string;
    city:string;
    uf:string;
    cep:string;
}

export type Institution = {
    id?:number;
    corporate:string;
    cnpj:string;
    phone:string;
    email:string;
    responsible:string;
    address:Adress;
}


type Course = {
    id?:number;
    name:string,
    period:string,
    date_start:Date,
    date_finish:Date
    fk_institution:Institution
}

type Discipline = {
    id?:number,
    name:string,
    acronym:string,
    module:string,
    fk_course:Course
}


