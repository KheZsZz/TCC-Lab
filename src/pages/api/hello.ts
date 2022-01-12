// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { sql_query } from '../../utils/database';

type Data = { data: unknown; sucess:boolean; }
type Error = {error:string; sucess:boolean;}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
  switch(req.method){
    case "GET":
      const data = await sql_query("select * from laboratorios",[]);
      res.status(200).json({sucess:true, data:data})
    break;

    default:
        res.status(400).json({sucess:false, error:"Bad Request"});
  }
}
