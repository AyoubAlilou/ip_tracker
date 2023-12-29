import React from 'react'
import { Outlet } from 'react-router-dom'
import Appbarrr from '../Components/Appbarrr'
import Drawerr from '../Components/Drawer'
const drawerWidth = 240
function Root() {
  return (
    <div>
      <Appbarrr drawerWidth={drawerWidth} />
      <Drawerr drawerWidth={drawerWidth} />
      <Outlet />
    </div>
  )
}

export default Root
