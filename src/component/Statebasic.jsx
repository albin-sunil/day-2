import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
    //use state
    var  [name,setName] =useState("albin");
    var [data, setData]= useState();
    const inputHandler =(e)=>{
    console.log(e.target.value)
    setName (e.target.value)
    }
    const changeName=()=>{ setData(name)}
    return (
    <div style={{marginLeft:'45%',marginTop:'10%'}}> 
    <Typography variant='h3' >hi {data}</Typography>
    <br />
    <TextField variant='outlined'  onChange={inputHandler}/>
    <br/><br />
    <Button  onClick={changeName}>sumbit</Button>
    </div>
  )
}

export default Statebasic
