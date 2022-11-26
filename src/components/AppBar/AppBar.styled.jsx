import styled from 'styled-components';

export const Header = styled.header`
  padding: ${props => props.theme.spacing(8)} ${props => props.theme.spacing(4)};
  border-bottom: 1px solid white;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
