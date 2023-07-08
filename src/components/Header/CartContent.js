import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Popover, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import CountButton from '../countButton';
import { fetchOrdersAction } from '../../store/actions/OrdersActions';

const CartContent = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();


  const handlePlaceOrder = () => {
    const page = 1; 
    const limit = 10; 
    dispatch(fetchOrdersAction(page, limit));
  };

  return (
    <Popover
      open={cartItems.length}
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {cartItems.map((product) => (
              <div
                key={product.id}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '20px',
                  padding: 20,
                }}
              >
                <img
                  alt=""
                  src={product.picture}
                  style={{ maxWidth: 52, maxHeight: 52 }}
                />
                <Typography variant="h6">{product.category}</Typography>
                <CountButton />
                <Typography variant="h6">{product.price}</Typography>
              </div>
            ))}
            <Button
              sx={{
                width: 346,
                height: 52,
                background: '#0073E6',
                borderRadius: 3,
                marginBottom: 4,
              }}
              onClick={handlePlaceOrder}
            >
              <Typography
                sx={{
                  color: '#ffffff',
                  fontSize: 16,
                  textTransform: 'capitalize',
                }}
              >
                Оформить заказ
              </Typography>
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

