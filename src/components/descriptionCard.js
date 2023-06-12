import { Box, Container } from "@mui/system";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { Rating } from '@mui/material';
import Button from '@mui/material/Button';

import React from "react";

export default function DescriptionCard() {
  return (
    <div>
      <Paper
        sx={{
          margin: 'auto',
          marginTop: '50px',
          maxWidth: 792,
          maxHeight: 422,
          flexGrow: 1,
          borderRadius: 3, 
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>

          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                        Описание
                        </Typography>
                        
                        <Typography variant="body2" gutterBottom>
                        Детская зимняя куртка Reimatec® изготовлена из износостойкого, водо- и ветронепроницаемого, дышащего материала с грязеотталкивающей поверхностью. Швы в детской куртке проклеены и водонепроницаемы, 
                        поэтому неожиданный снегопад или дождь не помешает веселым играм на свежем воздухе! Эту удобную куртку с подкладкой из гладкого полиэстера легко надевать и удобно носить. Благодаря регулируемой талии
                         и подолу куртка прямого кроя отлично сидит по фигуре. Капюшон снабжен кнопками. Это обеспечивает дополнительную безопасность во время активных прогулок – капюшон легко отстегивается, если случайно за что-нибудь зацепится.
                          Практичная отделка: эластичные манжеты, два передних кармана с клапанами и светоотражающие детали.
                        </Typography>
                    </Grid>


            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

