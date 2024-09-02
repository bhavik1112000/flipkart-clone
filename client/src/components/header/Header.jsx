import React, { useState } from 'react'
import { AppBar, Box, Drawer, IconButton, linkClasses, List, ListItem, styled, Toolbar, Typography } from '@mui/material'
import Search from './Search';
import Custombuttons from './Custombuttons';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { flexbox } from '@mui/system';

const StyledHeader = styled(AppBar)`
  background: #2874F0;
  height: 55px;
`

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  color: '#fff',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  }
}))

const CustombuttonsWrapper = styled('span')(({ theme }) => ({
  margin: '0 12% 0 auto',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  }
}))


function Header() {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  const list = () => (
    <Box style={{width: 200}} onClick={handleClose}>
      <List>
        <ListItem button>
          <Custombuttons />
        </ListItem>
      </List>
    </Box>
  )

  return (
    <div>
      <StyledHeader>
        <Toolbar style={{ minHeight: 55 }}>
          <MenuButton onClick={handleOpen}>
            <Menu />
          </MenuButton>

          <Drawer open={open} onClose={handleClose}>
            {list()}
          </Drawer>

          <Link to='/' style={{ marginLeft: '12%', textDecoration: 'none', color: 'inherit' }}>
            <img src={logoURL} alt='logo' style={{ width: 75, lineHeight: 0 }} />
            <Box style={{ display: 'flex' }}>
              <Typography style={{ fontSize: 10, fontStyle: 'italic' }} >Explore&nbsp;
                <Box component='span' style={{ color: '#FFE500' }}>Plus</Box>
              </Typography>
              <img src={subURL} alt='plus logo' style={{ width: 10, height: 10, marginLeft: 4 }} />
            </Box>
          </Link>
          <Search />
          <CustombuttonsWrapper>
            <Custombuttons />
          </CustombuttonsWrapper>

        </Toolbar>
      </StyledHeader>
    </div>
  )
}

export default Header