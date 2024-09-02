import { Box, Button, ButtonGroup, styled } from '@mui/material'
import React from 'react'

const StyledButton = styled(Button)`
  border-radius: 50%;
`

function Group() {
  return (
    <ButtonGroup style={{marginTop: 30}}>
      <StyledButton>-</StyledButton>
      <StyledButton disabled>1</StyledButton>
      <StyledButton>+</StyledButton>
    </ButtonGroup>
  )
}

export default Group