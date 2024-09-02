import { Box, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react';

const Container = styled(Box)`
  padding: 15px 24px;
  & > p{
    margin-bottom: 20px;
    font-size: 14px;
  }
`

const Price = styled(Box)`
  float: right;
`

function TotalView({ cartItems }) {

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(()=>{
    totalAmount();
  },[cartItems])

  const totalAmount = () => {
    let price = 0, discount = 0;
    cartItems.map((item) => {
      price += item.price.mrp;
      discount += (item.price.mrp - item.price.cost);
    });
    setPrice(price);
    setDiscount(discount);
  }

  return (
    <Box minWidth='280px' maxWidth='auto'>
      <Box style={{ padding: '15px 24px', borderBottom: '1px solid #f0f0f0' }}>
        <Typography style={{ color: '#878787' }}>PRICE DETAILS</Typography>
      </Box>
      <Container>
        <Typography>Price ({cartItems?.length} item)
          <Price component='span'>₹{price}</Price>
        </Typography>
        <Typography>Discount
          <Price component='span'>-₹{discount}</Price>
        </Typography>
        <Typography>Delivery
          <Price component='span'>₹40</Price>
        </Typography>
        <Typography style={{ fontSize: 16, fontWeight: '600' }}>Total Amount
          <Price component='span'>₹{price-discount+40}</Price>
        </Typography>
        <Typography style={{ color: 'green', fontWeight: '500' }}>You will save {discount-40} on this order</Typography>
      </Container>
    </Box>
  )
}

export default TotalView