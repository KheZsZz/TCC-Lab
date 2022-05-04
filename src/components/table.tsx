import { useEffect, useState } from "react";
import { Assents } from "../types/types_stock";
import styles from "../styles/tableComponent.module.css";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

const TableAssents = ({ status }: any) => {
  const [data, setData] = useState<Assents[]>();
  const [loadding, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/assents/")
      .then((res) => res.json())
      .then((i) => setData(i));
    setLoading(false);
  }, [status]);

  if (loadding) {
    return <h1>Loadding...</h1>;
  } else {
    return (
      <TableContainer>
        <Table size="small" className={styles.tablewidth}>
          <TableHead>
            <TableRow>
              <TableCell align="center">N° Property</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Model</TableCell>
              <TableCell align="center">serial</TableCell>
              <TableCell align="center">value</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data?.map((row: Assents) => (
              <TableRow key={row.assent_name}>
                <TableCell component="th" scope="row">
                  {row.assent_name}
                </TableCell>
                <TableCell align="center">{row.assent_number}</TableCell>
                <TableCell align="center">{row.assent_name}</TableCell>
                <TableCell align="center">{row.model}</TableCell>
                <TableCell align="center">{row.serial_number}</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
};
export default TableAssents;
