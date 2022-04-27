import { NextApiRequest, NextApiResponse } from "next";
import { manisfest } from "../../../../config/config";
import { sql_query } from "../../../../config/database";
import type { Users } from '../../../../types/type_users';

const handleUserEmail = async (req:NextApiRequest, res:NextApiResponse) => {
  const { email, password } = req.query;

  switch(req.method){
    case "GET":
      const data = await sql_query<Users>(`select * from ${manisfest.tablesBD.Users.users} where email = ?`, [email]);
      res.status(200).json(data)
    break;

    default:
      res.status(400).json({message:`Sorry, bad request error: 400`})
  }
}
export default handleUserEmail;