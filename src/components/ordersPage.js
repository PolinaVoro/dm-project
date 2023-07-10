import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdersAction } from '../store/actions/OrdersActions';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';

import CartContent from './Header/CartContent';

export default function OrdersPage() {
  const orders = useSelector((state) => state.orders);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [cartOrders, setCartOrders] = useState([]);

  useEffect(() => {
    dispatch(fetchOrdersAction(1, 1));
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(orders) && orders.length > 0) {
      setCartOrders(orders);
    }
  }, [orders]);

  const handlePlaceOrder = async () => {
    const page = 1;
    const limit = 10;
    await dispatch(fetchOrdersAction(page, limit));
    setCartOrders(cartItems); 
  };

  return (
    <Box
      sx={{
        marginTop: 4,
        p: 5,
        backgroundColor: '#f2f6fa',
        height: 1100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 1280, marginBottom: 'auto', gap: 3 }}>
        <nav>
          <List>
            {Array.isArray(cartOrders) && cartOrders.length > 0 ? (
              cartOrders.map((order) => (
                <ListItem
                  key={order.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    marginBottom: '20px',
                  }}
                >
                  <ListItemButton sx={{ borderRadius: '16px' }}>
                    <Typography sx={{ fontSize: 13, color: '#808080' }}>
                      Заказы: {order.title}
                    </Typography>
                    <img src={order.picture} alt="" style={{ maxWidth: 52, maxHeight: 52 }} />
                    <Typography sx={{ fontSize: 13, color: '#808080' }}>
                      Оформлено: {order.createdAt}
                    </Typography>
                    <Typography sx={{ fontSize: 13, color: '#808080' }}>
                      На сумму: {order.price}₽
                    </Typography>
                  </ListItemButton>
                </ListItem>
              ))
            ) : (
              <Typography>Нет доступных заказов</Typography>
            )}
          </List>
        </nav>
      </Box>
      <CartContent
        cartItems={cartItems}
        setCartOrders={setCartOrders}
        handlePlaceOrder={handlePlaceOrder}
      />
    </Box>
  );
}


