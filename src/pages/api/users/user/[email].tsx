import { NextApiRequest, NextApiResponse } from "next";
import { manisfest } from "../../../../config/config";
import { sql_query } from "../../../../config/database";
import type { Users } from '../../../../types/type_users';

const handleUserEmail = async (req:NextApiRequest, res:NextApiResponse) => {
  const { email } = req.query;

  switch(req.method){
    case "GET":
      try {
        const data = await sql_query<Users[]>(`select * from ${manisfest.tablesBD.Users.users} where email = ?`, [email]);
        data?.length === 0 ? res.status(401).json({message:`E-mail não cadastrado`}) : res.status(200).json(data);
      } catch (error) {
        res.status(400).json({message:`Error: ${error}`});
      }
    break;

    default:
      res.status(400).json({message:`Sorry, bad request error: ${res.status}`})
  }
}
export default handleUserEmail;