import { Text } from 'components/constants/DefaultStyleComponents.styled';
import { Main, Icon, Title } from './ErrorPage.styled';

const ErrorPage = () => {
  return (
    <Main>
      <Icon />
      <Title>404</Title>
      <Text>Page not found</Text>
    </Main>
  );
};
export default ErrorPage;
