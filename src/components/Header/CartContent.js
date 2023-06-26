
import React from 'react';
import { useSelector } from 'react-redux';
import { Popover, Typography } from '@mui/material';
import Button from '@mui/material/Button';

const CartContent = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Popover
      open={cartItems.length }
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      
      
    >
      <div className="cart-content">
        {cartItems.length > 0 ? (
          <div sx={{ width: 512, padding: 16,   }} >
            {cartItems.map((product) => (
              <div key={product.id}  >
                <Typography>{product.title}</Typography>
                <Typography>{product.price} </Typography>
                
              </div>

            ))}
            <Button sx={{ width: 346, height: 52, background: '#0073E6', borderRadius: 3, marginBottom: 4 }}>
                <Typography sx={{ color: '#ffffff', fontSize: 16, textTransform: 'capitalize' }} >Оформить заказ</Typography>
            </Button>
          </div>
        ) : (
          <Typography variant="body2">Корзина пуста</Typography>
        )}
      </div>
    </Popover>
  );
};

export default CartContent;

