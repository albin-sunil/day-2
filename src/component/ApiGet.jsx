import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
const ApiGet = () => {
    var[data,setData] = useState([])
    //axios syntax
    // axios.get("url").then().catch()

    // useEffect
    //useEffect(()=>{},[])

    useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
    console.log(res);
    setData(res.data)
    }).catch((errror)=>{
    console.log(errror);})
    }
)
  return (
    <div>  
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Website</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((value,index)=>{
            return(
                <TableRow key={index}>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.email}</TableCell>
                    <TableCell>{value.website}</TableCell>
                </TableRow>
            )
            })}
            </TableBody>
        </Table>
    </TableContainer>
    </div>
  )
}

export default ApiGet