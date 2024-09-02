import { Box, Grid, styled } from '@mui/material'
import React from 'react'
import { imageURL } from '../../constants/data'

const Image = styled('img')(({theme})=>({
  marginTop:10,
  width:'100%',
  [theme.breakpoints.down('md')]: {
    objectFit: 'cover',
    height: 120
  }
}));

function MidSection() {

  const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

  return (
    <>
    <Grid style={{marginTop:10}} lg={12} md={12} sm={12} xs={12} container>
      {
        
        imageURL.map(image => (
          <Grid item lg={4} md={4} sm={12} xs={12}>
          <img style={{width:'100%'}}  src={image} alt='img' />
          </Grid>
        ))
      }
    </Grid>
      <Image src={url} alt="url" />
    </>

  )
}

export default MidSection