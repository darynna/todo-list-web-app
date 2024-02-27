import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrap = styled.div`
  margin-top: 64px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;

  .field{
    width: 380px;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #0056b3
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #0056b3
`;

export const InputStyled = styled(Field)`
  width: 380px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #0056b3
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: #e63900;
`;

export const SubmitButton = styled.button`
  background-color: #1e90ff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s; 

  &:hover {
    background-color: #0056b3;
  }
`;

export const FormDescriptionText = styled.p`
  width: 600px;
  margin: 0 auto;
  margin-bottom: 24px;
  text-align: center;
  color: #1e90ff;
  font-size: 24px;
  font-weight: bold;
`;
