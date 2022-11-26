import styled from 'styled-components';
import { Form } from 'formik';
import {
  BaseStyledInput,
  BaseStyledError,
  Button,
  BaseStyledLabel,
} from 'components/constants/DefaultStyleComponents.styled';

export const StyledForm = styled(Form)`
  margin: 0 auto;
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(6)};
`;

export const Label = styled(BaseStyledLabel)``;

export const StyledInput = styled(BaseStyledInput)``;

export const Error = styled(BaseStyledError)``;

export const StyledBtn = styled(Button)``;
