import { Box, Button, styled } from '@mui/material'
import React, { useState } from 'react'
import { ShoppingCart, FlashOn } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction'
import { payWithPaytm } from '../../service/api';
import { post } from '../../paytm';

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '35px 0 0 35px',
  margin: 20,
  [theme.breakpoints.down('lg')]: {
    padding: '35px 0 0 20px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '20px 40px',
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: '48%',
  marginTop: 13,
  padding: '5px 10px',
  height: 50,
  fontWeight: '600',
  borderRadius: 2,
  fontSize: 12,

}));


function Actionitem({ product }) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = product;
  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate('/cart');
  }

  const buyNow = async() => {
    let res = await payWithPaytm({amount: 500, email: 'bhavik@gmail.com'});
    var information = {
      action: 'https://securegw-stage.paytm.in/order/process',
      params: res
    }
    post(information);
  }

  return (
    <LeftContainer>
      <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', textAlign: 'center' }}>
        <img style={{ padding: 15, width: '85%' }} src={product.detailUrl} />
      </Box>
      <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
        <StyledButton onClick={() => addItemToCart()} variant='contained' style={{ background: '#ff9f00' }}><ShoppingCart /> Add to Cart</StyledButton>
        <StyledButton onClick={()=>buyNow()} variant='contained' style={{ background: '#fb541b' }}><FlashOn />Buy Now</StyledButton>
      </Box>
    </LeftContainer>
  )
}

export default Actionitem