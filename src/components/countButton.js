import React, { useState } from "react";

import { Container, ButtonGroup, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blueGrey[50]),
    backgroundColor: '#E6F1FC', 
    borderColor: '#E6F1FC',
    borderRadius: 10,
    "&:hover": {
      backgroundColor: '#0073E6', 
      borderColor: '#0073E6'
    }
  }));
  

const StyledInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: 0,
       
    borderColor: '#E6F1FC',
    },
    "&:hover fieldset": {
      borderColor: '#E6F1FC'
    },
    "&.Mui-focused fieldset": {
      borderColor: '#E6F1FC'
    },
    "& input": {
      textAlign: "center",
      width: 52,
      color: '#172029',
      backgroundColor: '#E6F1FC',
    }
  }
});

export default function CountButton  () {
  const [count, setCount] = useState(1);
  const handleChange = (event) => {
    setCount(Math.max(Number(event.target.value), 1));
  };
  return (
    <Container>
      <ButtonGroup>
        <StyledButton
          onClick={() => setCount((prev) => prev - 1)}
          disabled={count === 1}
        >
          <RemoveIcon fontSize="small" />
        </StyledButton>
        <StyledInput size="small" onChange={handleChange} value={count} />
        <StyledButton onClick={() => setCount((prev) => prev + 1)}>
          <AddIcon fontSize="small" />
        </StyledButton>
      </ButtonGroup>
    </Container>
  );
}

