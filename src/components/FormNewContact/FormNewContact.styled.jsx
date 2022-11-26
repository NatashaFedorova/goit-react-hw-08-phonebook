import styled from 'styled-components';
import { Form } from 'formik';
import {
  Button,
  BaseStyledInput,
  BaseStyledLabel,
  BaseStyledError,
} from 'components/constants/DefaultStyleComponents.styled';

export const DataForm = styled(Form)`
  min-width: 500px;
`;

export const Label = styled(BaseStyledLabel)`
  margin-bottom: ${props => props.theme.spacing(10)};
`;

export const Input = styled(BaseStyledInput)`
  padding: ${props => props.theme.spacing(6)} ${props => props.theme.spacing(2)};
`;

export const BtnSubmit = styled(Button)`
  margin: 0 auto;
`;

export const Error = styled(BaseStyledError)``;
