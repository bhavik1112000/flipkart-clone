import { Box, styled } from '@mui/material'
import React from 'react'
import Slide from './Slide'

const LeftComponent = styled(Box)(({theme})=>({
  width:'82%',
  [theme.breakpoints.down('md')]:{
    width:'100%'
  }
}))

const RightComponent = styled(Box)(({theme})=>({
  width:'17%',
  textAlign:'center', 
  backgroundColor:'#fff', 
  padding: 5,marginTop:10, 
  marginLeft:10,
  [theme.breakpoints.down('md')]:{
    display:'none'
  }
}))

const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';


function MidSlide({ products, title, timer }) {
  return (
   <Box style={{display:'flex'}}>
    <LeftComponent>
        <Slide products={products} title={title} timer={timer} />
    </LeftComponent>
    <RightComponent style={{}}>
        <img src={adURL} alt='add' style={{width:'210px', height:'100%'}} />
    </RightComponent>
   </Box>
  )
}

export default MidSlide