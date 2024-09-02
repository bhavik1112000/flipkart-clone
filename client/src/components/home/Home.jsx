import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/productAction'
import Banner from './Banner'
import MidSection from './MidSection'
import MidSlide from './MidSlide'
import Navbar from './Navbar'
import Slide from './Slide'

function Home() {
  const {products} = useSelector(state => state.getProducts);
  // console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(getProducts())
  }, [dispatch])
  
  return (
    <Box style={{flex:1}}>
      <Navbar />
      <Box style={{padding:5, background:'#f2f2f2'}}>
        <Banner />
        <MidSlide products={products} title="Deals of the Day" timer={true}/>
        <MidSection />
        <Slide products={products} title="Discounts for you" timer={false} />
        <Slide products={products} title="Suggesting Items" timer={false} />
        <Slide products={products} title="Top Selections" timer={false}/>
        <Slide products={products} title='Trending Offers' timer={false}/>
      </Box>
    </Box>
  )
}

export default Home