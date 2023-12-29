import React from 'react'
import { Outlet } from 'react-router-dom'
import { Toolbar, AppBar, Avatar, Link, Typography } from '@mui/material'

function Root() {
  return (
    <div>
      <AppBar position='static'>
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
      <Outlet />
    </div>
  )
}

export default Root
