import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import HomePage from 'page/HomePage';
import SharedLayout from 'components/SharedLayout';
import { Background } from 'components/constants/Background.styled';
import PublicRestrictedRoute from 'components/PublicRestrictedRoute';
import PrivateRoute from 'components/PrivateRoute';
import { selectIsRefreshing } from 'redux/auth/selectors';
import RefreshingUserLoader from 'components/RefreshingUserLoader';
import { darkTheme, lightTheme } from 'components/constants/Theme';
import { ThemeProvider } from 'styled-components';

import { selectStatusTheme } from 'redux/theme/selectors';

const RegisterPage = lazy(() => import('page/RegisterPage'));
const LoginPage = lazy(() => import('page/LoginPage'));
const ContactsPage = lazy(() => import('page/ContactsPage'));
const ErrorPage = lazy(() => import('page/ErrorPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  const value = useSelector(selectStatusTheme);
  const theme = value ? darkTheme : lightTheme;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Background>
        {isRefreshing ? (
          <RefreshingUserLoader />
        ) : (
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <PublicRestrictedRoute
                    redirectTo="/contacts"
                    component={<RegisterPage />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRestrictedRoute
                    redirectTo="/contacts"
                    component={<LoginPage />}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ContactsPage />}
                  />
                }
              />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        )}
      </Background>
    </ThemeProvider>
  );
};

export default App;
