import { NextApiRequest, NextApiResponse } from "next";
import { manisfest } from "../../../config/config";
import { sql_query } from "../../../config/database";
import { Assents } from "../../../types/types_stock";


const handleAssetsId = async (req:NextApiRequest, res:NextApiResponse) => {
  const { id } = req.query;

  switch(req.method){
    case "GET":
      const data = await sql_query<Assents>(`SELECT * FROM ${manisfest.tablesBD.Institution.assets} WHERE id = ?`, [Number(id)]);
      res.status(200).json(data)
    break;

    case "PATH":

    break;

    case "DELETE":
      await sql_query<Assents>(``,[id, 0])
    break;

    default:
      res.status(400).json({message:`Sorry, bad request error: 400`})
  }
}