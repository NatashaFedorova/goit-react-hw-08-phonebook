import styled from 'styled-components';
import {
  BaseMain,
  BaseTitle,
} from 'components/constants/DefaultStyleComponents.styled';

export const Main = styled(BaseMain)``;

export const Title = styled(BaseTitle)`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing(8)};
`;
