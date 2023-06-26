import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, fetchProducts } from '../../store/actions/CardsActions';

export default function PaginationFooter() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);


  const handlePageChange = (event, page) => {
    dispatch(setCurrentPage(page));
    dispatch(fetchProducts(page));
  };

  return (
    <Stack >
      <Pagination
        variant="outlined"
        shape="rounded"
        count={11}
        page={currentPage}
        onChange={handlePageChange}
        sx={{
          position: 'absolute',
          top: '1200px',
          left: '530px',
          '& .MuiPaginationItem-root': {
            backgroundColor: '#E6F1FC',
            color: '#0073E6',
            border: 'none',
          },
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: '#0073E6',
            color: '#FFFFFF',
          },
        }}
        defaultPage={1}
        siblingCount={0}
        boundaryCount={2}
      />
    </Stack>
  );
}
