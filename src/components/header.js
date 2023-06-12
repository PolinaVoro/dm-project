import React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { AppBar, Container, Toolbar, Box } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Buttons from './buttons';



function Header() {
  return (
    <AppBar position='fixed' sx={{boxShadow:'0'}} style={{ background: '#f2f6fa' }} >
      
        <Toolbar sx={{displey:'flex', justifyContent: 'space-between' }}>

          <img src="images/Logo.svg" alt="" sx={{position:'absolute', left:'100px'}}/>


          <Buttons />


          <Box >
            <Button  sx={{ textTransform: 'capitalize', }} >
              <AddShoppingCartIcon style={ {color :'#172029', fontSize: 'medium'}} />
               Корзина
            </Button>
          </Box>


        </Toolbar>
      
    </AppBar>
  );
}

export default Header;
