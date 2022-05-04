import { Users } from "./type_users";

type ItensStock = {
  id?: number;
  serial_number: string;
  product_batch: string;
  name: string;
  brand: string;
  model: string;
  desc: string;
};

export type Stock = {
  // Estoque
  id?: number;
  sector: string;
  responsable: Users;
  itensStock: ItensStock[];
};

export interface Assents {
  // Patrimonios
  id?: number;
  assent_number: number;
  serial_number: string;
  assent_name: string;
  brand: string;
  model: string;
  product_batch: number;
  tax_invoice: number;
  complement: string;
  value_assent: number;
  verify: any;
  color: string;
}

interface MaintanceRequerement {
  id?: number;
  data_requerement: Date;
  observation: string;
  fixed_asset: Assents;
  requester: Users;
}

export interface MaintananceSchedule extends MaintanceRequerement {
  id?: number;
  desc: string;
}
