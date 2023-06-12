import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function Buttons() {
  const [selectedButton, setSelectedButton] = useState('Товары');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <Box>
      <Button
        onClick={() => handleButtonClick('Товары')}
        sx={{
          borderBottom: selectedButton === 'Товары' ? '3px solid #0073E6' : 'none',
          textTransform: 'capitalize',
          fontWeight: 'medium',
          color: selectedButton === 'Товары' ? '#0073E6' : 'black',
          borderRadius: '0',
        }}
      >
        <Typography variant="body2">Товары</Typography>
      </Button>
      <Button
        onClick={() => handleButtonClick('Заказы')}
        sx={{
          borderBottom: selectedButton === 'Заказы' ? '3px solid #0073E6' : 'none',
          textTransform: 'capitalize',
          fontWeight: 'medium',
          color: selectedButton === 'Заказы' ? '#0073E6' : 'black',
          borderRadius: '0',
        }}
      >
        <Typography variant="body2">Заказы</Typography>
      </Button>
    </Box>
  );
}

