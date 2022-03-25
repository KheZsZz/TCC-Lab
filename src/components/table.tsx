import { useEffect, useState } from "react";
import { manisfest } from "../config/config";
import { Assets } from "../types/types_inventory";


const Table = () => {

    const [data, setData] = useState<Assets>();
    const [loadding, setLoading] = useState(true);
    
    useEffect(()=>{
        fetch('http://localhost:3000/api/assets/').then(res=>res.json()).then(i => setData(i))
        setLoading(false)
    },[setData]);

    if(loadding){
        return(
            <h1>Loadding...</h1>
        )
    }else {
        return (
            <table>
              <tr>
                <th>N° Property</th>
                <th>Name</th>
                <th>Model</th>
                <th>serial</th>
                <th>value</th>
              </tr>
              {
                //   JSON.stringify(data)
              }
            </table>
        )
    }
}
export default Table;