
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import React from "react";

export default function DescriptionCard() {
  return (
    <div >
      <Paper
        sx={{
          marginTop: 5,
          p: 2,
          width: 792,
          height: 200,
          boxShadow: 'none',
          borderRadius: 3, 
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container  >

          <Grid item xs={12} sm container >
            <Grid item xs container direction="column" >
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontWeight: 600,}}>
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

