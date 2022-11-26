import { BaseStyledNavLink } from 'components/constants/DefaultStyleComponents.styled';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

export const NavList = styled.ul`
  display: flex;
  gap: ${props => props.theme.spacing(6)};
`;

export const NavItem = styled.li``;

export const StyledNavLink = styled(BaseStyledNavLink)``;
