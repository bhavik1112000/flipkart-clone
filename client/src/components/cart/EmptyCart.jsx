import { Box, Typography } from '@mui/material'
import React from 'react'

function EmptyCart() {
  const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

  return (
      <Box style={{height:'70vh',display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <img width='300px' src={imgurl} alt="empty" />
        <Typography>Your cart is Empty</Typography>
        <Typography>Add items to your cart now!!!</Typography>
      </Box>
  )
}

export default EmptyCart