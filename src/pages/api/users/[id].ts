import { NextApiRequest, NextApiResponse } from "next";
import { manisfest } from "../../../config/config";
import { sql_query } from "../../../config/database";


const handleUserID = async (req:NextApiRequest, res:NextApiResponse) => {
  const { id } = req.query;

  switch(req.method){
    case "GET":
      const data = await sql_query(`SELECT * FROM ${manisfest.tablesBD.Users} WHERE id = ?`, [Number(id)]);
      res.status(200).json(data)
    break;

    case "PATH":

    break;

    case "DELETE":
      await sql_query(``,[id, 0])
    break;

    default:
      res.status(400).json({message:`Sorry, bad request error: 400`})
  }
}
export default handleUserID;