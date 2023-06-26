import { Box } from "@mui/system";
import React from "react";
import Cards from "../../components/Main/productsList";



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
            
            <Cards/>
            
            
        </Box>
    );
}

