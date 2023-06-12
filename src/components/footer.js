
import  React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box, Pagination } from "@mui/material";
import PaginationFooter from "./pagination";
import Stack from '@mui/material/Stack';

export default function Footer() {
  return (
    <Box
      sx={{

          backgroundColor: '#f2f6fa',
          p: '6',
          
      }}

      component="footer">
        <PaginationFooter/>




    </Box>
  );
}