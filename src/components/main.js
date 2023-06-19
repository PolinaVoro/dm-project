import { Box } from "@mui/system";
import React from "react";
import Cards from "./productsList";
import { Link } from "react-router-dom";


export default function Main() {
    return (
        <Box component="main"
            sx={{
                marginTop: 4,
                p: 5, 
                backgroundColor: '#f2f6fa',
                height: 1100,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Link to="/product/:productId" style={{ textDecoration: 'none', }}>
            <Cards/>
            </Link>
            
        </Box>
    );
}

