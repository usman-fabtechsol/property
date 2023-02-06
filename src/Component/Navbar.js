import React from 'react';
import {AppBar, Toolbar, styled, Typography,theme,Box,InputBase,Badge, Avatar, Menu, MenuItem,} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import PetsIcon from '@mui/icons-material/Pets';
import { Notifications } from '@mui/icons-material';
import { useState } from 'react';
import img from './images/3.jpg'

const Navbar = () => {
    const [Open, setOpen] = useState(false);
    const StyleToolbar= styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between"
    })
    const Search = styled("div")(({theme})=>({
        backgroundColor:"white",
        borderRadius:theme.shape.borderRadius,
        width:"40%",
        padding:"3px"
    }))

    const Icons = styled(Box)(({theme})=>({
    }))
    return (
        <AppBar position='sticky'>
            <StyleToolbar>
                <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>
                    Lama div
                </Typography >
            {/* <PetsIcon sx={{display:{xs:"none", sm:"block"}}}/> */}
            <Search>
                <InputBase sx={{p:"3"}} placeholder='search'/>
            </Search>
            <Icons sx={{display:"flex", gap:"20px", alignItems:"center"}}>
            <Badge badgeContent={4} color="error" sx={{display:{xs:"none", md:"block"}}}>
                <MailIcon  />
            </Badge>
            <Badge badgeContent={4} color="error" sx={{display:{xs:"none", md:"block"}}}>
                <Notifications />
            </Badge>
            <Avatar onClick={e=>setOpen(true)} src={img} sx={{width:30, height:30}} />
            {/* <img src={img} alt="" sx={{width:30, height:30}} /> */}
            </Icons>
            </StyleToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={Open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
            
        </AppBar >
    );
}

export default Navbar;
