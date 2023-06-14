import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';

export default function PaginationFooter() {
  return (

      <Stack >     
         <Pagination
        variant="outlined"
        shape="rounded"
        
        sx={{
          position: 'absolute',
          
          top: '1225px',
          left: '550px',
          '& .MuiPaginationItem-root': {
            backgroundColor: '#E6F1FC', 
            color: '#0073E6',
            border: 'none' 
          },
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: '#0073E6',
            color: '#FFFFFF', 
          },
        }}
        count={11}
        defaultPage={6}
        siblingCount={0}
        boundaryCount={2}
      /></Stack>
          

   

  

  );
}
