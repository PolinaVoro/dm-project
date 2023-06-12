import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Footer() {
  return (
    <Stack  >
      <Pagination
        variant="outlined"
        shape="rounded"
        
        sx={{
          position: 'absolute',
          
          top: '1200px',
          left: '550px',
          '& .MuiPaginationItem-root': {
            backgroundColor: '#E6F1FC', // Измените цвет фона кнопок здесь
            color: '#0073E6',
            border: 'none' // Измените цвет текста кнопок здесь
          },
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: '#0073E6', // Измените цвет фона активной кнопки здесь
            color: '#FFFFFF', // Измените цвет текста активной кнопки здесь
          },
        }}
        count={11}
        defaultPage={6}
        siblingCount={0}
        boundaryCount={2}
      />
    </Stack>
  );
}
