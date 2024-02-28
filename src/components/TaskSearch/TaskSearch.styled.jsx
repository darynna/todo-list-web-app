import styled from 'styled-components';


export const InputBoxStyled = styled.div`
 margin-top: 16px;
 display: flex;
 justify-content: center;
`;

export const InputStyled = styled.input`
  width: 380px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #0056b3;

  @media screen and (max-width: 767px) {
    width: 236px;
  }
`;


export const InputButtonStyled = styled.button`
  font-size: 24px;
  background-color: #8ed1fa;
  color: white;
  border: none;
  border-radius: 3px;


`;
