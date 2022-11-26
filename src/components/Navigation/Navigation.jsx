import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Nav, NavList, NavItem, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Nav>
      <NavList>
        <NavItem>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
        </NavItem>
        {isLoggedIn && (
          <NavItem>
            <StyledNavLink to="contacts">Contacts</StyledNavLink>
          </NavItem>
        )}
      </NavList>

      {!isLoggedIn && (
        <NavList>
          <NavItem>
            <StyledNavLink to="register">Registration</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="login">Log in</StyledNavLink>
          </NavItem>
        </NavList>
      )}
    </Nav>
  );
};
export default Navigation;
