import { NextApiRequest, NextApiResponse } from 'next';
import { manisfest } from '../../../config/config';
import { sql_query } from '../../../config/database';
import { Institution, Lab } from '../../../types/types_Institution';

const HandleSchedulesTechers = async (
  res: NextApiResponse,
  req: NextApiRequest,
) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ message: `Unauthorized` });
  } else {
    switch (req.method) {
      case 'GET':
        const agendamentosLabs = sql_query(
          `select * from ${manisfest.tablesBD.Requirements.labs}`,
        );
        break;
      default:
        res.status(404).json({ message: `Não encontrado` });
    }
  }
};
export default HandleSchedulesTechers;
