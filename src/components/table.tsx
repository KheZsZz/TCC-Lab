import { useEffect, useState } from "react";  
import { Assets } from "../types/types_inventory";
import styles from '../styles/tableComponent.module.css';

import { 
  Table,
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
} from '@material-ui/core';



const TableAssets = ({status}:any) => {

    const [data, setData] = useState<Assets[]>();
    const [loadding, setLoading] = useState(true);
    
    useEffect(()=>{
        fetch('http://localhost:3000/api/assets/').then(res => res.json()).then(i => setData(i))
        setLoading(false);
    },[status]);

    if(loadding){
        return(
            <h1>Loadding...</h1>
        )
    }else {
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
              {data?.map((row:Assets) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.property_number}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.model}</TableCell>
                  <TableCell align="center">{row.property_serial_number}</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }
}
export default TableAssets;