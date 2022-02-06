import styled from 'styled-components';
export const ContactsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 15px 0;
  width: 100%;
  font-family: sans-serif;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 40px) / 2);
    justify-content: space-around;
    flex-direction: row;
  } ;
`;
