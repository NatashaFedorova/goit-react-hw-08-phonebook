import {
  BaseStyledNavLink,
  Text,
} from 'components/constants/DefaultStyleComponents.styled';
import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(8)};
`;

export const StyledText = styled(Text)`
  border-bottom: 1px solid ${props => props.theme.colors.light};
`;

export const StyledNavLink = styled(BaseStyledNavLink)``;
