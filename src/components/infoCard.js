

import Typography from '@mui/material/Typography';
import  React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { Rating } from '@mui/material';
import Button from '@mui/material/Button';






const Img = styled('img')({
  margin: 'auto',
  
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function InfoCard({ match }) {


  return (
    <div  >
      <Paper
      
      
        sx={{
          p: 2,
          boxShadow: 'none',
          width: 792,
          height: 422,
          borderRadius: 3, 
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container  sx={{marginBottom: '400px', }}>
          <Grid item >
            <ButtonBase sx={{ 
              width: 374,
              height: 374,}}>
              <Img alt="" src="" />
            </ButtonBase>
          </Grid>

           <Grid item xs={12} sm container  >
            <Grid item xs container direction="column" >
                  <Grid item xs sx={{ height: 50 ,  }}>
                    <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontSize: 28, fontWeight: 500, }}>
                      Куртка Lassie
                    </Typography>
                    <Rating name="rating" defaultValue={5} readOnly  precision={5}/>
                    <Typography variant="body2"  sx={{ fontSize: 28, marginTop: 5, fontWeight: 800, }}>
                      6990р
                    </Typography>
                  </Grid>

                  <Grid item >
                    <Button sx={{
                      width: 346,
                      height: 52,
                      background: '#0073E6',
                      borderRadius: 3 ,
                      marginBottom: 4 ,  }}>


                        <Typography sx={{color: '#ffffff', fontSize: 16, textTransform: 'capitalize',}}>Добавить в корзину</Typography>

                    </Button>

                  </Grid>

                  <Grid sx={{ marginBottom: 2, display: 'flex', flexDirection: 'column', gap: '10px',}}>
                    <Typography sx={{ fontWeight: 600, cursor: 'pointer',}}> <Img alt="" src="/images/Shape2.svg" width={20} /> Условия возврата</Typography>
                    <Typography sx={{ fontSize: 16 ,  }}>
                    Обменять или вернуть товар надлежащего качества можно в течение 14 дней с момента покупки.
                    </Typography>
                    <Typography sx={{ fontSize: 10 , color: '#808080' , }}>
                    Цены в интернет-магазине могут отличаться от розничных магазинов.
                    </Typography>

                  </Grid>


                 




            </Grid>

          </Grid>
        </Grid>
        
      </Paper>

      

      
    </div>
  );
}
