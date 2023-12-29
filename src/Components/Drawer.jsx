import { Divider, Drawer, List, Toolbar } from '@mui/material'
import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import { Create, Home, Logout, Person, Settings } from '@mui/icons-material'
import { Link } from 'react-router-dom'
function Drawerr({ drawerWidth }) {
  return (
    <Drawer
      sx={{
        width: `${drawerWidth}px`,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: `${drawerWidth}px`,
          boxSizing: 'border-box',
        },
      }}
      variant='permanent'
      anchor='left'
    >
      <Toolbar />
      <Divider />
      <List>
        <Link style={{ color: 'inherit' }} to='/'>
          <ListItem disablePadding>
            <ListItemButton>
              <Home>
                <InboxIcon />
              </Home>
              <ListItemText primary='Home ' />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link style={{ color: 'inherit' }} to='/create'>
          <ListItem disablePadding>
            <ListItemButton>
              <Create>
                <InboxIcon />
              </Create>
              <ListItemText primary='Create ' />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link style={{ color: 'inherit' }} to='/person'>
          <ListItem disablePadding>
            <ListItemButton>
              <Person>
                <InboxIcon />
              </Person>
              <ListItemText primary='Person ' />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link style={{ color: 'inherit' }} to='/settings'>
          <ListItem disablePadding>
            <ListItemButton>
              <Settings>
                <InboxIcon />
              </Settings>
              <ListItemText primary='Settings ' />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link style={{ color: 'inherit' }} to='/logout'>
          <ListItem disablePadding>
            <ListItemButton>
              <Logout>
                <InboxIcon />
              </Logout>
              <ListItemText primary='Logout ' />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  )
}

export default Drawerr
