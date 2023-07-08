import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdersAction } from '../store/actions/OrdersActions';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';

export default function OrdersPage() {
  const orders = useSelector((state) => state.orders.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrdersAction(1, 1));
  }, [dispatch]);

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
            {Array.isArray(orders) && orders.length > 0 ? ( 
              orders.map((order) => (
                <ListItem
                  key={order.product.id} 
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    marginBottom: '20px',
                  }}
                >
                  <ListItemButton sx={{ borderRadius: '16px' }}>
                    <Typography sx={{ fontSize: 13, color: '#808080' }}>
                      Заказы: {order.product.title} 
                    </Typography>
                    <img src={order.product.picture} alt="" /> 
                    <Typography sx={{ fontSize: 13, color: '#808080' }}>
                      Оформлено: {order.createdAt}
                    </Typography>
                    <Typography sx={{ fontSize: 13, color: '#808080' }}>
                      На сумму: {order.product.price}₽ 
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
    </Box>
  );
}


