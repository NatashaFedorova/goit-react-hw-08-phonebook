import LoginForm from 'components/LoginForm';
import { Main, Title } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <Main>
      <Title>Log in of your account</Title>
      <LoginForm />
    </Main>
  );
};

export default LoginPage;
