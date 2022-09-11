import React from 'react'
import styled from 'styled-components'

const BackgroundImage = () => {
  return (
    <Container>
   
      <img src="./images/net-background.jpg" alt="" />


    </Container>
  )
}

export default BackgroundImage

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img{
    height: 100vh;
    width: 100vw;
  }
`