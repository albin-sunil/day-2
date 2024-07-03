import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navabar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>

          
          <Button color="inherit">
          <Link to={'/l'}>
          Login
            </Link>
            </Button>
          <Button color='inherit'>
          <Link to={'/r'}>
            Registration
            </Link>
            </Button>
          <Button color='inherit'>
          <Link to={'/t'}>
            Table
            </Link>
          </Button>
          <Button color='inherit'>
          <Link to={'/s'}>
            Statebasic
            </Link>
            </Button>
         <Button color='inherit'>
          <Link to={'/n'}>
            New
            </Link>
            </Button>
            <Button color='inherit'>
          <Link to={'/f'}>
            FormBasics
            </Link>
            </Button>
            <Button color='inherit'>
          <Link to={'/a'}>
            ApiGet
            </Link>
            </Button>
            <Button color='inherit'>
          <Link to={'/j'}>
            Jewelery
            </Link>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navabar