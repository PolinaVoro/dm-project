import { Box, Container } from "@mui/system";
import React from "react";
import Card from "./card";

export default function Main() {
    return (
        <Box
            sx={{
                backgroundColor: '#f2f6fa',
                position: 'relative',
                top: 64,

            }}
        >
            <Card  />
        </Box>
    );
}
