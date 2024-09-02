import React, { useState } from 'react'
import { Box, Button, Dialog, styled, TextField, Typography } from '@mui/material'
import { authenticateLogin, authenticateSignUp } from '../../service/api'
import { useContext } from 'react'
import { dataContext } from '../../context/DataProvider'

const Wrapper = styled(Box)`
  display: flex;
  width: 60%;
  flex-direction: column;
  padding: 20px 35px;
  & > div, & > button, & > p{
    margin-top: 20px;
  }
`
const initialState = {
  login: {
    view: 'login',
    heading: "Login",
    subheading: "Get access to your Orders, Wishlist and Recommendations"
  },
  signup: {
    view: 'signup',
    heading: "Looks like you're new here!",
    subheading: "Sign up with your mobile number to get started"

  }
}

const signUpInitialValues = {
  firstname: '',
  lastname: '',
  email: '',
  username: '',
  password: '',
  phone: ''
}

const loginInitialValues = {
  username: '',
  password: ''
}

function LoginDialog({ open, setOpen }) {

  const [account, toggleAccount] = useState(initialState.login);
  const [signup, setSignup] = useState(signUpInitialValues);
  const { setAccount } = useContext(dataContext);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(initialState.login);
    setError(false)
  }

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    // console.log(signup);
  }

  const signUpUser = async () => {
    const response = await authenticateSignUp(signup);
    if (response) {
      handleClose();
      setAccount(signup.firstname);
    }
  }

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const loginUser = async () => {
    const responce = await authenticateLogin(login);
    if(responce.status === 200) {
      handleClose();
      setAccount(responce.data.data.firstname);
      setError(false);
    }
    else{
      setError(true);
    }


  }

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
      <Box style={{ height: '90vh', width: '100vh', display: 'flex', overflow: 'hidden' }}>
        <Box style={{ height: '85%', background: '#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 70%/80% no-repeat', width: '40%', padding: '45px 30px' }}>
          <Typography style={{ color: '#ffffff', fontWeight: '600' }} variant='h5'> {account.heading} </Typography>
          <Typography style={{ marginTop: 20, color: '#ffffff' }}> {account.subheading} </Typography>
        </Box>
        {
          account.view === 'login' ?
            <Wrapper>
              <TextField variant='standard' onChange={(e) => { onValueChange(e) }} name='username' label="Enter Username" />
              <TextField variant='standard' onChange={(e) => { onValueChange(e) }} name='password' label="Enter Password" />
              {error && <Typography style={{color: '#ff6161', lineHeight: 0, fintSize: 10}}>Invalid password or username</Typography>}
              <Typography style={{ fontSize: 12, color: '#878787' }}>By continuing, you agree Flipkart's terms of use and privacy policy</Typography>
              <Button onClick={loginUser} style={{ textTransform: 'none', backgroundColor: '#fb641d', color: '#fff', height: 48, borderRadius: 2 }}>Login</Button>
              <Typography style={{ textAlign: 'center' }}>OR</Typography>
              <Button style={{ textTransform: 'none', backgroundColor: '#fff', color: '#2874f0', height: 48, borderRadius: 2, boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)' }}>Request OTP</Button>
              <Typography onClick={() => { toggleAccount(initialState.signup) }} style={{ fontSize: 14, textAlign: 'center', color: '#2874f0', fontWeight: '600', cursor: 'pointer' }}>New to Flipkart? Create an account</Typography>
            </Wrapper>
            :
            <Wrapper>
              <TextField variant='standard' onChange={(e) => { onInputChange(e) }} name='firstname' label="Enter Firstname" />
              <TextField variant='standard' onChange={(e) => { onInputChange(e) }} name='lastname' label="Enter Lastname" />
              <TextField variant='standard' onChange={(e) => { onInputChange(e) }} name='username' label="Enter Username" />
              <TextField variant='standard' onChange={(e) => { onInputChange(e) }} name='email' label="Enter Email" />
              <TextField variant='standard' onChange={(e) => { onInputChange(e) }} name='password' label="Enter Password" />
              <TextField variant='standard' onChange={(e) => { onInputChange(e) }} name='phone' label="Enter Phone" />
              <Button onClick={() => { signUpUser() }} style={{ textTransform: 'none', backgroundColor: '#fb641d', color: '#fff', height: 48, borderRadius: 2 }}>Continue</Button>

            </Wrapper>
        }
      </Box>
    </Dialog>
  )
}

export default LoginDialog
