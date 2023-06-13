import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/actions/CardsActions';
import { Box, Grid, Card, CardActionArea, CardContent, CardMedia, Typography, Rating } from '@mui/material';

export default function Cards() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Box sx={{ }}>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {products && products.length > 0 ? (
          products.map((product) => (
            <Grid item key={product.id}>
              <Card
                sx={{
                  maxWidth: 250,
                  maxHeight: 358,
                  borderRadius: '16px',
                  boxShadow: 0,
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    width="250"
                    image={product.picture}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div" sx={{ maxHeight: 30, overflow: 'hidden' }}>
                      {product.title}
                    </Typography>
                    <Rating name="rating" value={product.rating} readOnly />
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'black', fontSize: 22 }}>
                      {product.price}₽
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">Нет доступных товаров</Typography>
        )}
      </Grid>
    </Box>
  );
}



