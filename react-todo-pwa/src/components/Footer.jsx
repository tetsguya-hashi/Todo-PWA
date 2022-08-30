import React from 'react'
import { Box } from '@mui/material'

const Footer = () => {
  return (
    <div>
      <Box sx={{
        width: '100%',
        height: 56,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3f51b5',
        position: 'fixed',
        bottom: 0,
        color: '#fff'
      }}>
        copyright Tetstuya Hashi
      </Box>
    </div >
  )
}

export default Footer