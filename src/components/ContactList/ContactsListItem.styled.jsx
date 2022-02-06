import styled from 'styled-components';

export const Contacts = styled.li`
  box-sizing: border-box;
  width: 360px;
  text-align: start;
  border-radius: 4px;
  box-shadow: 0px 0px 1px 1px rgb(0 0 0 / 15%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  >p { margin: 0;}
 
  @media screen and (max-width: 424px) {
    flex-direction: column;
    width: 280px;
  };

  @media screen and (min-width: 1024px) {
    width: 380px;

`;
