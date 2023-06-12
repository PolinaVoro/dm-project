import { Box } from "@mui/system";
import React from "react";
import Card from "./card";

export default function Main() {
    return (
        <Box component="main"
            sx={{
                marginTop: 4,
                p: 6, 
                backgroundColor: '#f2f6fa',
                height: 1138,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Card />
        </Box>
    );
}

