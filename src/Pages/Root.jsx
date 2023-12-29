import React from 'react'
import { Outlet } from 'react-router-dom'
import Appbarrr from '../Components/Appbarrr'
import Drawerr from '../Components/Drawer'
import { Box } from '@mui/material'
const drawerWidth = 240
function Root() {
  return (
    <div>
      <Appbarrr drawerWidth={drawerWidth} />
      <Drawerr drawerWidth={drawerWidth} />
      <Box
        sx={{
          ml: `${drawerWidth}px`,
          display: 'flex',
          justifyContent: 'center',
          mt: '66px',
        }}
      >
        <Outlet />
      </Box>
    </div>
  )
}

export default Root
