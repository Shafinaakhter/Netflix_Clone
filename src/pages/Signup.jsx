import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header login />

        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h2 style={{ fontSize: "50px" }}>
              Unlimited Movies, TV Shows ane More
            </h2>
            <h4>Watch anywhere. Cancel anytime</h4>
            <h6>
              Ready to Watch? Enter your email to create or restart membership
            </h6>
          </div>
          <div className=" form container flex-column">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {showPassword && (
              <input
                type="password"
                name="password"
                placeholder="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}

            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>
          <button onClick={handleSignIn}>Sign Up</button>
        </div>
      </div>
    </Container>
  );
};

export default Signup;

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
    .body{
      gap: 1rem;
      .text{
        gap: 1rem;
        text-align: center;
      }
      h1{
        padding: 0 25rem;
      }
    }
    .form{
      // display: grid;
      // grid-template-columns: ${({ showPassword }) =>showPassword ? "1fr 1fr" : "2fr 1fr"}
      width: 50%;
      input{
        width: 50%;
        color: black;
        border: none;
        padding: 0.5rem;
        font-size: 1.2rem;
        border: 1px solid black;
        &:focus{
          outline: none;
        }
      }
      button{
        width: 50%;
        padding: 0.7rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        font-weight: bolder;
        font-size: 1.05rme;
      }
    }
    button{
      padding: 0.5rem;
      background-color: #e50914;
      border: none;
      cursor: pointer;
      color: white;
      border-radius: 0.2rem;
      font-weight: bolder;
      font-size: 1.05rme;
    }
  }
  
`;
