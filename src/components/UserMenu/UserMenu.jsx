import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { Box, StyledText, StyledNavLink } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <Box>
      <StyledText>Welcome, {name}</StyledText>
      <StyledNavLink
        to="/"
        onClick={() => {
          dispatch(logOut());
          console.log('Logout');
        }}
      >
        Log out
      </StyledNavLink>
    </Box>
  );
};
export default UserMenu;
