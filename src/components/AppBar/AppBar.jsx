import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Header, Box, IconMoon, IconSun, Toggle } from './AppBar.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation';
import { selectStatusTheme } from 'redux/theme/selectors';
import { changeTheme } from 'redux/theme/themeSlice';
import { useState } from 'react';

const AppBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const statusTheme = useSelector(selectStatusTheme);
  const [isChecked, setIsChecked] = useState(statusTheme);

  const onToggle = () => {
    setIsChecked(!isChecked);
    dispatch(changeTheme());
  };

  return (
    <Header>
      <Navigation />
      {isLoggedIn && <UserMenu />}
      <Box>
        {isChecked ? <IconMoon /> : <IconSun />}
        <Toggle type="checkbox" checked={isChecked} onChange={onToggle} />
      </Box>
    </Header>
  );
};

export default AppBar;
