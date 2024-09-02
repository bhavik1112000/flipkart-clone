import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { navData } from '../../constants/data'

const Container = styled(Box)(({theme})=>({
  display:'flex', 
  justifyContent:'space-between' , 
  margin:'50px 130px 0 130px',
  [theme.breakpoints.down('lg')]:{
    margin:0
  }
}))

function Navbar() {
  return (
    <Container>
      {
        navData.map((data)=>(
          <Box style={{padding:'12px 8px', textAlign:'center'}}>
            <img src={data.url} alt='data' style={{width:64}} />
            <Typography style={{fontSize:14, fontWeight:600, fontFamily:'inherit'}}>{data.text}</Typography>
          </Box>
        ))
      }
    </Container>
  )
}

export default Navbar