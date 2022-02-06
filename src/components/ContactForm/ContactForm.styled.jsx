import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  border: 2px solid gray;
  margin 0 auto;
  padding: 15px;
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  max-width: 350px;
  margin: 0 auto;
`;

export const Button = styled.button`
  font-family: inherit;
  display: block;
  border: none;
  cursor: pointer;
  padding: 5px;
  margin: ${props => (props.type === 'submit' ? '0 auto' : '0')};
  max-width: 100%;
  overflow: hidden;
  width: fit-content;
   {
    background-color: ${props =>
      props.type === 'submit' ? '#ff8100ba' : '#009688'};
  }
`;
