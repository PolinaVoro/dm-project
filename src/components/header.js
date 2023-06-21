import React from 'react';
import Button from '@mui/material/Button';
import { AppBar,  Toolbar, Box } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Buttons from './buttons';
import Typography from '@mui/material/Typography';



function Header() {
  return (
    <AppBar position='fixed' sx={{boxShadow:'0'}} style={{ background: '#f2f6fa' }} >
      
        <Toolbar sx={{displey:'flex', justifyContent: 'space-between' }}>

          <img src="images/Logo.svg" alt="" sx={{position:'absolute', left:'100px'}}/>


          <Buttons />


          <Box >
            <Button  sx={{ textTransform: 'capitalize', }} >
              <img src="images/Shape.svg" alt=""/>
               <Typography sx={{color :'#172029', fontSize: 15 }}>Корзина</Typography>
            </Button>
          </Box>


        </Toolbar>
      
    </AppBar>
  );
}

export default Header;
