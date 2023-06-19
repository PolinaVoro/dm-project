import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/actions/CardsActions';
import { useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import Button from '@mui/material/Button';


export default function ProductDetailsPage() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector((state) => state.currentProduct);

  useEffect(() => {
    dispatch(fetchProducts(1, 15, productId));
  }, [dispatch, productId]);

  

  return (
    <div  style={{display: 'flex', justifyContent: 'center', alignItems: 'center',
     marginTop: 63, backgroundColor: '#f2f6fa', padding: 20, }}>
      {product ? (
        <div >
          <Paper
            sx={{
              p: 2,
              boxShadow: 'none',
              width: 792,
              height: 422,
              borderRadius: 3,
              backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
            }}
          >
            <Grid container sx={{ marginBottom: '400px' }}>
              <Grid item>
                <ButtonBase sx={{ width: 374, height: 374 }}>
                  <img alt="" src={product.picture} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column">
                  <Grid item xs sx={{ height: 50 }}>
                    <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontSize: 28, fontWeight: 500 }}>
                      {product.category}
                    </Typography>
                    <Rating name="rating" value={product.rating} />
                    <Typography variant="body2" sx={{ fontSize: 28, marginTop: 5, fontWeight: 800 }}>
                      {product.price}₽
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button sx={{ width: 346, height: 52, background: '#0073E6', borderRadius: 3, marginBottom: 4 }}>
                      <Typography sx={{ color: '#ffffff', fontSize: 16, textTransform: 'capitalize' }}>Добавить в корзину</Typography>
                    </Button>
                  </Grid>
                  <Grid sx={{ marginBottom: 2, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Typography sx={{ fontWeight: 600, cursor: 'pointer' }}>
                      <img alt="" src="/images/Shape2.svg" width={20} style={{ marginRight: '5px' }} /> Условия возврата
                    </Typography>
                    <Typography sx={{ fontSize: 16 }} > Обменять или вернуть товар надлежащего качества можно в течение 14 дней с момента покупки.  </Typography>
                    <Typography sx={{ fontSize: 10, color: '#808080' }}> Цены в интернет-магазине могут отличаться от розничных магазинов.</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>

          <div >
            <Paper
            sx={{
              marginTop: 5,
              p: 2,
              width: 792,
              boxShadow: 'none',
              borderRadius: 3, 
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
            height="auto"
          >
            <Grid container>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column">
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontWeight: 600 }}>
                      Описание
                    </Typography>
                    <Typography variant="body2" gutterBottom dangerouslySetInnerHTML={{ __html: product.description }}>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>

        </div>

       





        </div>

        

        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

