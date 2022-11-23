import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Title, TitleContactsSection, Error } from './App.styled';
import { Background } from 'components/constants/Background.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import Loader from 'components/Loader';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Background>
      <Section>
        <Title>Phonebook</Title>
        <ContactForm />
      </Section>
      <Section>
        <TitleContactsSection>Contacts</TitleContactsSection>
        <Filter />
        {isLoading && <Loader />}
        {error && <Error>Something went wrong, please reload the page</Error>}
        <ContactList />
      </Section>
    </Background>
  );
};

export default App;
