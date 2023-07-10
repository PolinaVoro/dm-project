import React, { useEffect } from "react";
import { Box } from "@mui/material";
import PaginationFooter from "./pagination";
import { setCurrentPage, fetchProducts } from '../../store/actions/CardsActions';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export default function Footer( { hidePagination }) {
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const totalPages = useSelector((state) => state.pagination.totalPages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(currentPage, 15));
  }, [currentPage, dispatch]);

  const handlePageChange = (event, page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <Box
      sx={{
        width: 1425,
        height: 50,
        backgroundColor: '#f2f6fa',
        

        
        
      }}
      component="footer"
    >  {hidePagination ? (
      <Typography variant="body1"></Typography>
      ) : (
      <PaginationFooter
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      )}
    </Box>
  );
}

