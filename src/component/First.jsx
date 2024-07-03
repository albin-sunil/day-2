import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const First = (props) => {
  console.log(props.data)
  var[val,setVal] =useState({name:props.data.name,age:props.data.age})

    return (
    <div>
      <h1>login page</h1>
     <h2></h2> <input type="text"></input>< br />
      <input type='password' name=""id=""></input>< br />
      <button>submit</button><br/>
      <br />
      <br />

      <Typography variant="h3">login page</Typography>
      <Typography></Typography>
      <br />
      <br />
      <br /><br />
      <TextField variant="outlined" label='username'/>< br/>
      <TextField variant="filled" label='password'/>< br/>
      <TextField variant="standard" label='login'/>< br/>
      <br /><br />
      <Button variant='Text'>login</Button>&nbsp;
      <Button variant='contained' color='success'>password</Button>&nbsp;
      <Button variant='outlined'>username</Button>&nbsp;
    </div>
  )
}

export default First
