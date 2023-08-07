import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyle = styled.header`
  display: block;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 50px;
  nav {
    background-color: rgb(249, 249, 249);
    padding: 3rem 2rem 3rem 0;
    ul {
      display: flex;
    justify-content: end;
      li {
        list-style: none;  
      }
    }
  }
`

export const HeaderLinkStyle = styled(Link)`
  font-size: 1.6rem;
  padding: 1rem;
  color: rgb(142, 152, 164);
  text-decoration: none;
`