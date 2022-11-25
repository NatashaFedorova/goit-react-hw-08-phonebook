import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { refreshUser } from 'redux/auth/operations';
import Home from 'page/Home';
import SharedLayout from 'components/SharedLayout';
import { Background } from 'components/constants/Background.styled';
import PublicRestrictedRoute from 'components/PublicRestrictedRoute';
import PrivateRoute from 'components/PrivateRoute';
import { selectIsRefreshing } from 'redux/auth/selectors';

const Register = lazy(() => import('page/Register'));
const Login = lazy(() => import('page/Login'));
const Contacts = lazy(() => import('page/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Background>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicRestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRestrictedRoute
                redirectTo="/contacts"
                component={<Login />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<p>Page 404</p>} />
        </Route>
      </Routes>
    </Background>
  );
};

export default App;

/* <Section>
        <Title>Phonebook</Title>
        <ContactForm />
      </Section>
      <Section>
        <TitleContactsSection>Contacts</TitleContactsSection>
        <Filter />
        {isLoading && <Loader />}
        {error && <Error>Something went wrong, please reload the page</Error>}
        <ContactList />
      </Section> */
