import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Rating, Box, Grid } from '@mui/material';

export default function Cards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://skillfactory-task.detmir.team/products?page=1&limit=20');
        const data = await response.json();
        if (data && data.meta && data.data) {
          setProducts(data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box sx={{ 
      width: 1346,
      height: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'}}>
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
                    <Typography variant="h6" component="div">
                      {product.title}
                    </Typography>
                    <Rating name="rating" value={product.rating} readOnly />
                    <Typography variant="body1">{product.price}</Typography>
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
