// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { sql_query } from '../../lib/database';


export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {

  
  switch(req.method){

    case "GET":
      const data = await sql_query(
        `select * from laboratorios order by nome desc limit 10`,
        []);
      res.status(200).json({sucess:true, data:data})
    break;

    case "POST":
      const insertdata = await sql_query("insert into laboratorios (nome, tipo) values (?,?)",[]);
      res.status(200).json({sucess:true, data:insertdata});
    break;

    default:
        res.status(400).json({sucess:false, error:"Bad Request"});
  }
}
