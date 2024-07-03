import { TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Rg  = (props) => {
  console.log(props.data)
  var[val,setVal] =useState({
    Name: props.data.Name,
    age: props.data.age,
    place: props.data.place,
  })
  return (
    <div>
 <Typography>{val.Name}</Typography>
    <TextField id="outlined-basic" label="name" variant="outlined" />
    <TextField variant="outlined"label='age'/>
    <TextField  variant="outlined" label='password'/>
    </div>
  )
}

export default Rg
