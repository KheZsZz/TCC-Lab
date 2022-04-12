
export type Adress = {
    id?:number;
    type_adress:string;
    adress:string;
    number_adress:number;
    neighborhood:string;
    city:string;
    uf:string;
    zip_code:string;
}

export type Institution = {
    id?:number;
    corporate_name:string;
    cnpj:string;
    phone:string;
    email:string;
    responsible:string;
    address:Adress; //?
}


type Course = {
    id?:number;
    name_course:string,
    period:string,
    initial_date:Date,
    final_date:Date,
    fk_institution:Institution
}

type Discipline = {
    id?:number,
    n_school_subject:string,
    abbreviation:string,
    school_module:string,
    fk_course:Course
}


