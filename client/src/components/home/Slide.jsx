import { Box, Typography, Button, Divider, styled } from '@mui/material';
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

const Text = styled(Typography)`
font-size: 14px;
margin-top: 5px
`

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Slide({ products, title, timer }) {

  const renderer = ({ hours, minutes, seconds }) => {
    return (<Box variant='span'> {hours} : {minutes} : {seconds} Left </Box>)
  };

  return (
    <Box style={{ marginTop: 10, backgroundColor: '#fff' }}>
      <Box style={{ padding: '15px 20px', display: 'flex' }}>
        <Typography style={{ fontSize: 22, fontWeight: '600', marginRight: 25, lineHeight: '32px' }}>{title}</Typography>

        {timer && <Box style={{ display: 'flex', marginLeft: 10, alignItems: 'center', color: '#7f7f7f' }}>
          <img src={timerURL} style={{ width: 24 }} alt="timer" />
          <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
        </Box>}
        <Button variant='contained' color='primary' style={{ marginLeft: 'auto', backgroundColor: '#2874f0', borderRadius: 2, fontSize: 13, fontWeight: '600' }} >View All</Button>

      </Box>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {
          products.map(product => (
            <Link to={`product/${product.id}`} style={{textDecoration:'none'}}> 
            <Box textAlign='center' style={{ padding: '25px 15px' }}>
              <img src={product.url} alt='product' style={{ width: 'auto', height: 150 }} />
              <Text style={{ fontWeight: '600', color: '#212121' }}>{product.title.shortTitle}</Text>
              <Text style={{ color: 'green' }}>{product.discount}</Text>
              <Text style={{ color: '#212121', opacity: 0.6 }}>{product.tagline}</Text>
            </Box>
            </Link>
          ))
        }
      </Carousel>
    </Box>
  )
}

export default Slide