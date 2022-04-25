import { NextApiRequest, NextApiResponse } from "next";
import { manisfest } from "../../../config/config";
import { sql_query } from "../../../config/database";
import type { Users } from '../../../types/type_users';

const handleUserID = async (req:NextApiRequest, res:NextApiResponse) => {
  const { id } = req.query;
  const user:Users = req.body;

  switch(req.method){
    case "GET":
      const data = await sql_query<Users>(`select * from ${manisfest.tablesBD.Users.users} where id = ?`, [Number(id)]);
      res.status(200).json(data)
    break;

    case "PATCH":
      
    break;

    case "DELETE":
      try {
        const verify:Users[] = await (await fetch(`${manisfest.base_url}users/${id}`)).json();
        if(verify.length){
          await sql_query(`update ${manisfest.tablesBD.Users.users} set verify = ? where id = ?`,[0, Number(id)]);
          res.status(200).json({message:`Usuário ${id} deletado com sucesso!`})
        }else {
          res.status(204).json({message:`Usuário ${id} não encontrado!`});
        }
      } catch (error) {
        res.status(404).json({message:`Error ao deletar o usuário ${id}!`});
      }
    break;

    default:
      res.status(400).json({message:`Sorry, bad request error: 400`})
  }
}
export default handleUserID;