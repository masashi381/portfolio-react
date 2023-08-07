import styled from "styled-components";
import { Link } from "react-router-dom";

export const  ContactsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12rem;
  margin: 0 2rem 5rem;
`;

// form style

export const FormStyle = styled.form`
  width: 30vw;
  margin: 0 auto;
  margin-right: 2rem;
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem auto;
    label {
      font-size: 1.6rem;
      padding-bottom: 1rem;
      color: rgb(106, 109, 113);
    }
  }
  button {
    width: 100%;
    border-radius: 1rem;
    border: none;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    margin-top: 2rem;
    letter-spacing: 0.1rem;
    background: rgb(138, 140, 143);
    color: rgb(255, 255, 255);
  }
`;

// SNS style

export const OptionsStyle = styled.div`
  margin: 5rem auto 0;
  width: 33vw;
  p {
    font-size: 1.6rem;
    width: 100%;
    margin-bottom: 5rem;
    text-align: center;
    line-height: 1.5;
  }
  div {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const IconsStyle = styled(Link)`
  font-size: 2rem;
  color: rgb(73, 74, 76);
`;