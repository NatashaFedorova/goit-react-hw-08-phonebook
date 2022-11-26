import styled from 'styled-components';
import { TbFaceIdError } from 'react-icons/tb';
import {
  BaseMain,
  BaseTitle,
} from 'components/constants/DefaultStyleComponents.styled';

export const Main = styled(BaseMain)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(BaseTitle)``;

export const Icon = styled(TbFaceIdError)`
  width: 350px;
  height: 350px;
  color: ${props => props.theme.colors.accent};
`;
