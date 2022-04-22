import { NextApiRequest, NextApiResponse } from "next";
import { manisfest } from "../../../config/config";
import { sql_query } from "../../../config/database";
import { Institution } from "../../../types/types_Institution";

const handleCorporate = async (res:NextApiResponse, req:NextApiRequest) => {
  switch(req.method){
    case "GET":
    break;

    case "POST":
      const corporate:Institution = req.body;
      await sql_query<Institution> (
        `INSERT INTO ${manisfest.tablesBD.Institution.institution}
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        null, 
        corporate.address.id, 
        corporate.corporate_name, 
        corporate.cnpj, 
        corporate.phone,
        corporate.email,
        corporate.responsible
      ]);
    break;

    default:
      res.status(400).json({ message:'Sorry! Bad request error 404' });
  }
}
export default handleCorporate;