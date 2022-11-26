import styled from 'styled-components';
import {
  BaseMain,
  Button,
} from 'components/constants/DefaultStyleComponents.styled';

export const Main = styled(BaseMain)``;
export const StyledBtn = styled(Button)`
  width: 230px;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(6)};
  margin-bottom: ${props => props.theme.spacing(8)};
`;
