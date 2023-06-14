import Typography from '@mui/material/Typography';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { Rating } from '@mui/material';
import Button from '@mui/material/Button';
import DescriptionCard from './descriptionCard';




const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ProductDetailsPage({ match }) {


  return (
    <div>
      <Paper
        sx={{
          margin: 'auto',
          marginTop: '100px',
          maxWidth: 792,
          maxHeight: 422,
          flexGrow: 1,
          borderRadius: 3, 
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ 
              width: 374,
              height: 374,}}>
              <Img alt="" src="" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" component="div">
                      Куртка Lassie
                    </Typography>
                    <Rating name="rating" defaultValue={5} readOnly  precision={0.5}/>
                    <Typography variant="body2" gutterBottom>
                      6990р
                    </Typography>

                  </Grid>
                  <Grid item>
                    <Button sx={{
                      width: 346,
                      height: 52,
                      background: '#0073E6',
                      borderradius: 12, }}>


                    </Button>

                  </Grid>

                  <Grid>
                    <Typography>
                    Обменять или вернуть товар надлежащего качества можно в течение 14 дней с момента покупки.
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                    Цены в интернет-магазине могут отличаться от розничных магазинов.
                    </Typography>
                  </Grid>

                 




            </Grid>

          </Grid>
        </Grid>
      </Paper>

      <DescriptionCard/>

      
    </div>
  );
}
