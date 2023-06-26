import React  from 'react';

import { AppBar, Toolbar, Box,  Typography } from '@mui/material';
import Buttons from './buttonsHeader';
import  Badge  from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import CartIcon from './cartIcon';






const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


function Header() {




 

  return (
    <AppBar position='fixed' sx={{ boxShadow:'0' }} style={{ background: '#f2f6fa' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src="images/Logo.svg" alt="" sx={{ position: 'absolute', left: '100px' }} />

        <Buttons />

        <Box>
          <CartIcon/>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

