import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Header } from './AppBar.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn && <UserMenu />}
    </Header>
  );
};

export default AppBar;
