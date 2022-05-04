export interface Adress {
  id?: number;
  type_adress: string;
  adress: string;
  number_adress: number;
  neighborhood: string;
  city: string;
  state: string;
  zip_code: string;
}

type EducationHub = {
  id?: number;
  typeHub: string;
};

export type Institution = {
  id?: number;
  corporate_name: string;
  cnpj: string;
  phone: string;
  email: string;
  responsible: string;
  address: Adress;
  educationHub: EducationHub[];
};

export type Course = {
  id?: number;
  name_course: string;
  course_time: string;
  initial_date: Date;
  final_date: Date;
};

export type Discipline = {
  id?: number;
  name_school_subject: string;
  abbreviation: string;
  school_module: string;
  course: Course;
};

export type Lab = {
  id?: number;
  name_lab: string;
  type_lab: string;
};
