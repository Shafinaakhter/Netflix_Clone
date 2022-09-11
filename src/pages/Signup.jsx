import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'

const Signup = () => {
  return (
    <Container>
        <BackgroundImage />
        <div className="content">
        <Header />

        <div className="body flex column a-center j-center">
            <div className="text flex column">
                <h2>Unlimited Movies, TV Shows ane More</h2>
                <h4>Watch anywhere. Cancel anytime</h4>
                <h6>Ready to Watch? Enter your email to create or restart  membership</h6>
            </div>
            <div className="form">
                <input type="email" name="email" placeholder='Email address' />
                <input type="password" name="password" placeholder="password" />
                <button>Get Started</button>
            </div>
            <button>Log in</button>


        </div>
      </div>


    </Container>
  )
}

export default Signup


const Container = styled.div`
  position: relative;
  .content{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
  }
`;