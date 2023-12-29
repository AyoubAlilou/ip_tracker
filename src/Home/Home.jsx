import { Box, Typography, IconButton, Paper } from '@mui/material'
import './Home.css'

import React from 'react'
import { Close } from '@mui/icons-material'

function Home() {
  return (
    <div>
      <Box>
        <Paper
          sx={{
            position: 'relative',
            width: '366px',
            display: 'flex',
            justifyContent: 'space-between',
            mt: '22px',
            pt: '27px',
            pb: '7px',
          }}
        >
          <Typography sx={{ ml: '16px', fontSize: '1.3rem' }} variant='h6'>
            GYM
          </Typography>
          <Typography
            sx={{
              mr: '33px',
              fontWeight: 500,
              fontSize: '1.4em',
              opacity: '0.8',
            }}
            variant='h6'
          >
            $100
          </Typography>
          <IconButton sx={{ position: 'absolute', top: '0', right: '0' }}>
            <Close fontSize='20px' />
          </IconButton>
        </Paper>

        <Paper
          sx={{
            position: 'relative',
            width: '366px',
            display: 'flex',
            justifyContent: 'space-between',
            mt: '22px',
            pt: '27px',
            pb: '7px',
          }}
        >
          <Typography sx={{ ml: '16px', fontSize: '1.3rem' }} variant='h6'>
            GYM
          </Typography>
          <Typography
            sx={{
              mr: '33px',
              fontWeight: 500,
              fontSize: '1.4em',
              opacity: '0.8',
            }}
            variant='h6'
          >
            $100
          </Typography>
          <IconButton sx={{ position: 'absolute', top: '0', right: '0' }}>
            <Close fontSize='20px' />
          </IconButton>
        </Paper>
      </Box>
    </div>
  )
}

export default Home
