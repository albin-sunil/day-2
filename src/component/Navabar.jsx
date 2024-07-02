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
          <Link to={'/f'}>
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
          {/* <Button color='inherit'>
          <Link to={'/f'}>
          First
            </Link>
          </Button> */}
          <Button color='inherit'>
          <Link to={'/s'}>
            Statebasic
            </Link>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navabar