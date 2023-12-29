import React from 'react'
import { Toolbar, AppBar, Avatar, Link, Typography } from '@mui/material'
function Appbarrr({ drawerWidth }) {
  return (
    <AppBar
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      position='static'
    >
      <Toolbar>
        <Link
          underline='none'
          color='inherit'
          href='/'
          sx={{ flexGrow: 1, '&:hover': { fontSize: '16.5px' } }}
        >
          My expenses
        </Link>
        <Typography mr={2} variant='body1' color='inherit'>
          Ayoub Alilou
        </Typography>
        <Avatar alt='Remy Sharp' src='.\images\zabour.jpg' />
      </Toolbar>
    </AppBar>
  )
}

export default Appbarrr
