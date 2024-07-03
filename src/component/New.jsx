import React from 'react'
import { Button, Typography } from '@mui/material'
import { useState } from 'react'
const New = () => {
    var[data,setdata] =useState("click the button")
    const home =() =>{
        console.log('home');
        setdata("Home")
    };
  return (
    <div>
        <Typography style={{marginLeft:"40%", marginTop:"10%",textAlign:"centre"}}>Welcome to {data}</Typography>
        <Button id='HomeButton' variant='contained'>Home</Button>
        <Button id='GalleryButton'color='secondary' variant='contained'>Gallery</Button>
        <Button id='ContactsButton' color='error' variant='contained'>Contacts</Button>


    </div>
  )
}

export default New