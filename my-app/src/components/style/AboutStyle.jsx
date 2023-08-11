import styled from "styled-components"


export const AboutContainer = styled.div`
  height: 70vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12rem;
  margin: 0 3rem 3rem;
`;

export const ImgStyle = styled.img`
  width: 30vw;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;
  margin-left: 5rem;
`;

export const AboutInner = styled.div`
  width: 40vw;
`;

export const MiniTitle = styled.p`
  font-size:2.4rem;
  color: rgb(73, 74, 76);
  margin-bottom: 2rem;
  strong {
    font-size: 4rem;
  }
`;

export const Detail = styled.p`
  width: 50vw;
  font-size: 1.8rem;
  color: rgb(73, 74, 76);
  margin-bottom: 1rem;
`;

export const HobbyTitle = styled.p`
  font-size: 1.8rem;
  color: rgb(73, 74, 76);
  margin-bottom: 1rem;
`;

export const Items = styled.ul`
  width: 25vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem 1rem;
  li {
    font-size: 1.8rem;
    border: 1px solid rgba(73, 74, 76, 0.5);
    border-radius: 9rem;
    padding: 0.5rem;
  }
`;

export const HikeIcon = styled.i`
  margin-right: .5rem;
  color: rgb(23, 30, 219);
`;

export const MovieIcon = styled.i`
  margin-right: .5rem;
  color: rgb(23, 30, 219);
`;

export const BookIcon = styled.i`
  margin-right: .5rem;
  color: rgb(23, 30, 219);
`;

export const TravelIcon = styled.i`
  margin-right: .5rem;
  color: rgb(23, 30, 219);
`;

export const GymIcon = styled.i`
  margin-right: .5rem;
  color: rgb(23, 30, 219);
`;

export const TennisIcon = styled.i`
  margin-right: .5rem;
  color: rgb(23, 30, 219);
`;


// export const AboutDescStyle = styled.p`
//   width: 40vw;
//   margin: 0 auto;
//   font-size: 1.6rem;
// `;