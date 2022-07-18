import { AppBar, Toolbar, styled, Box, Typography, Badge, InputBase } from '@mui/material'
import { Notifications, Mail, RadioButtonChecked } from '@mui/icons-material';
import React from 'react'
import streamLogo from '../assets/Switch-Stream-PNG.png'

const Navbar = () => {

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
  })

  const Search = styled('div')(({theme}) => ({
      backgroundColor: "white",
      padding: "0 10px",
      borderRadius: theme.shape.borderRadius,
      width: "30%"
  }))

  const Icons = styled(Box)(({theme}) => ({
    display: 'flex',
    gap: '10px'
}))


  return (
    <AppBar position='static'>
        <StyledToolbar>
             
                <img src={streamLogo} alt='streamLogo' style={{width: '10%'}} />
              
             {/* <Typography variant='h6' sx={{display: {xs:"none", sm:"block"}}}>
                 Switch Stream
             </Typography> */}
             <RadioButtonChecked sx={{ display: {sx: 'block', sm:"none"}}}/>
             <Search>
                 <InputBase placeholder='Search'></InputBase>
             </Search>
             <Icons>
                <Badge badgeContent={4} color='error'>
                    <Mail />
                </Badge>
                <Badge badgeContent={17} color='error'>
                    <Notifications />
                </Badge>
             </Icons>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar