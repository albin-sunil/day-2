import { TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react';

const FormBasics = () => {
var[inputs,setInput]= useState({username:"",email:"",place:""});
const inputHandler =(e) =>{
    setInput({...inputs,[e.target.name]:e.target.value});
    console.log(inputs);
};
  return (
    <div
        style={{marginTop:'10%',marginlLeft:'45%'}}>
            <TextField
             variant="outlined"
             label="username"
             onChange={inputHandler}
             name="username"
             value={inputs.username}/>
            <br/>
            <br/>
            <TextField variant="outlined" label="Place"onChange={inputHandler}
            name='place'value={(inputs.place)}/><br/>
            <br/>
            <TextField
             variant="outlined"
             label="email"
             onChange={inputHandler}
             name="email"
             value={inputs.email}/>
            
            
    </div>
  )
}

export default FormBasics