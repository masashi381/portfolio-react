import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProjectContainer = styled.div`
  height: 100%;
  h3 {
    padding-top: 10rem;
    margin-bottom: 5rem;
    font-family: "Mynerve", cursive;
    font-size: 5rem;
    color: rgb(106, 109, 113);
    text-align: center;
  }
  .projectsInner {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 70%;
    margin: 0 auto;
    .img {
      width: 25rem;
      height: 25rem;
      object-fit: cover;
    }
    .portfolio {
      object-position: 0% 0%;
    }
    p {
      margin-top: 1rem;
      margin-bottom: 1rem;
      font-size: 1.8rem;
      font-family: "Shantell Sans", cursive;
      color: rgb(73, 74, 76);
      text-align: center;
    }
    .tag {
      /* text-align: center; */
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 25rem;
      span {
        color: rgb(73, 74, 76);
        font-size: 1.2rem;
        font-family: "Shantell Sans", cursive;
        margin: 0 0.5rem 0.5rem;
        padding: 0.1rem 1rem;
        border: 1px solid rgba(73, 74, 76);
        border-radius: 1rem;
      }
    }
  }

  @media screen and (max-width: 430px) {
    height: auto;
    .projectsInner {
      flex-direction: column;
      .img {
        display: block;
        width: 90%;
        margin: 0 auto;
      }
      p {
        margin: 2rem auto;
      }
    }
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  margin-bottom: 2rem;
`;
