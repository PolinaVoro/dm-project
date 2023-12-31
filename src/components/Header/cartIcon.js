import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems } from '../../store/actions/CartActions';
import CartContent from './CartContent';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const CartIcon = () => {
  const dispatch = useDispatch();
  const [isCartOpen, setCartOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartContentRef = useRef(null);

  const handleCartClick = () => {
    setCartOpen(!isCartOpen);
  };

  const handleClickOutside = (event) => {
    if (cartContentRef.current && !cartContentRef.current.contains(event.target)) {
      setCartOpen(false);
    }
  };

  return (
    <div onClick={handleClickOutside}>
      <IconButton
        sx={{ paddingRight: 1.2, color: '#172029' }}
        aria-label="cart"
        className="cart-icon"
        onClick={handleCartClick}
      >
        <StyledBadge badgeContent={cartItems.length} color="primary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <Button>
        <Typography sx={{ color: '#172029', fontSize: 15 }}>Корзина</Typography>
      </Button>
      {isCartOpen && (
        <div ref={cartContentRef}>
          <CartContent cartItems={cartItems} />
        </div>
      )}
    </div>
  );
};

export default CartIcon;






