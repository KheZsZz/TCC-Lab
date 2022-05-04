import { NextApiRequest, NextApiResponse } from "next";
import { manisfest } from "../../../config/config";
import { sql_query } from "../../../config/database";

const handleAdress = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      const data = await sql_query(
        `SELECT * FROM ${manisfest.tablesBD.Institution.adress}`,
        []
      );
      res.status(200).json(data);
      break;

    default:
      res.status(404).json({ message: `Sorry! Bad request... Error 404` });
  }
};
export default handleAdress;
