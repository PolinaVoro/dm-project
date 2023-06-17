import { Box } from "@mui/system";
import React from "react";
import Cards from "./productsList";
import ProductDetailsPage from "./productDetailsPage";

export default function Main() {
    return (
        <Box component="main"
            sx={{
                marginTop: 4,
                p: 4, 
                backgroundColor: '#f2f6fa',
                height: 1100,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <ProductDetailsPage/>
        </Box>
    );
}

