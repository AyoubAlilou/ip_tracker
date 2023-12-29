import { Divider, Drawer, List, Toolbar } from '@mui/material'
import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import { Create, Home, Logout, Person, Settings } from '@mui/icons-material'
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
        <ListItem disablePadding>
          <ListItemButton>
            <Home>
              <InboxIcon />
            </Home>
            <ListItemText primary='Home ' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <Create>
              <InboxIcon />
            </Create>
            <ListItemText primary='Create ' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <Person>
              <InboxIcon />
            </Person>
            <ListItemText primary='Person ' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <Settings>
              <InboxIcon />
            </Settings>
            <ListItemText primary='Settings ' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <Logout>
              <InboxIcon />
            </Logout>
            <ListItemText primary='Logout ' />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Drawerr
