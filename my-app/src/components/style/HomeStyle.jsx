import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem;
`

export const MainTitle = styled.h1`
  font-size: 56px;
  font-family: 'Shantell Sans', cursive;
  margin: 0;
`
export const MiniTitle = styled.h2`
  font-size: 28px;
  font-family: 'Mynerve', cursive;
  margin: 0;
`
export const LinkStyle = styled(Link)`
  margin-right: 1rem;
`