import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addEllipsis } from '../../commonUtils'
import { removeFromCart } from '../../redux/actions/cartAction'
import Group from './ButtonGroup'

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
`
const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`

function CartItem({ item }) {

  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

  const dispatch = useDispatch();
  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  }

  return (
    <Component>
      <LeftComponent>
        <img style={{width:130}} src={item.url} alt="image" />
        <Group />
      </LeftComponent>
      <Box margin='20px'>
        <Typography >{addEllipsis(item.title.longTitle) }</Typography>
        <Typography style={{ color: '#878787', fontSize: 14, marginTop: 10 }}>Seller: RetailNet
          <Box component='span'> <img src={fassured} style={{ width: 60, marginLeft: 10, verticalAlign: 'middle' }} /> </Box>
        </Typography>
        <Typography style={{margin: '20px 0px'}}>
        <Box component='span' style={{ fontSize: 18, fontWeight: 600 }}> ₹{item.price.cost} </Box>
        <Box component='span' style={{ color: '#878787' }}> <strike> {item.price.mrp} </strike> </Box>&nbsp;&nbsp;&nbsp;
        <Box component='span' style={{ color: '#388e3c' }}> {item.price.discount} </Box>
        </Typography>
        <Button onClick={()=>removeItem(item.id)} style={{marginTop: 20, fontSize:16, color:'#000', fontWeight: '600'}}>Remove</Button>
      </Box>
    </Component>
  )
}

export default CartItem