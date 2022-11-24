import { Suspense } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Container } from 'components/constants/Container.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUserName } from 'redux/auth/selectors';

const SharedLayout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const name = useSelector(selectUserName);
  console.log(isLoggedIn);

  return (
    <Container>
      <header
        style={{
          padding: '20px',
          borderBottom: '1px solid white',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', gap: '20px' }}>
          <NavLink to="/" end>
            Home
          </NavLink>

          {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
        </div>

        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'space-between',
          }}
        >
          {isLoggedIn ? (
            <div style={{ display: 'flex', gap: '20px' }}>
              <p>Welcome, {name}</p>
              <Link
                to="/"
                onClick={() => {
                  dispatch(logOut());
                  console.log('Logout');
                }}
              >
                Logout
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '20px' }}>
              <NavLink to="register">Register</NavLink>
              <NavLink to="login">Login</NavLink>
            </div>
          )}
        </div>
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
