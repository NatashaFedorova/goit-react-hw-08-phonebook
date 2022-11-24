// import Section from 'components/Section';
// import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';
// import ContactList from 'components/ContactList';
// import { Title, TitleContactsSection, Error } from './App.styled';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/selectors';
// import Loader from 'components/Loader';

import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// import { selectIsRefreshing } from '../../redux/auth/selectors';

import SharedLayout from 'components/SharedLayout';
import Home from 'page/Home';

import { Background } from 'components/constants/Background.styled';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';

const Register = lazy(() => import('page/Register'));
const Login = lazy(() => import('page/Login'));
const Contacts = lazy(() => import('page/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Background>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
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
