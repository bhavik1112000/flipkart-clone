import { Box, styled, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import { LocalOffer } from '@mui/icons-material'

const SmallText = styled(Box)`
  font-size: 14px;
  & > div > p {
    font-size: 14px;

  }
`
const StyledBadge = styled(LocalOffer)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 20px;
  vertical-align: middle;

`

const ColumnText = styled(TableRow)`
font -size: 14px;
vertical-align: baseline;
& > td {
  font-size: 14px;
  margin_top: 10px;
  border: none;
}
`

const Wrap = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

function ProductDetail({ product }) {
  const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

  return (
    <>
      <Typography>Available Offers</Typography>
      <SmallText>
      <Wrap><StyledBadge /><Typography>Combo OfferBuy 2 items save 5%; Buy 3 or more save 10%See all productsT&C </Typography></Wrap>
      <Wrap><StyledBadge /><Typography>Partner OfferBuy this product and get upto ₹250 off on Flipkart FurnitureKnow More </Typography></Wrap>
      <Wrap><StyledBadge /><Typography>Partner OfferPurchase now & get a surprise cashback coupon for January / February 2023Know More</Typography></Wrap>
      <Wrap><StyledBadge /><Typography>Bank Offer10% off on Citi Credit Card and EMI Transactions, up to ₹1,500. On orders of ₹5,000 and aboveT&C </Typography></Wrap>
      </SmallText>
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: '600' }}>Delivery by {date.toDateString()} | ₹40 </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Seller</TableCell>
            <TableCell >
              <Box component='span' style={{ color: '#2874f0' }}>SuprecomNet</Box>
              <Typography>GST invioce Available</Typography>
              <Typography>View more sellers starting from  ₹{product.price.cost}</Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell colspan={2}>
              <img style={{ width: 390 }} src={adURL} alt="super coin" />
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  )
}

export default ProductDetail