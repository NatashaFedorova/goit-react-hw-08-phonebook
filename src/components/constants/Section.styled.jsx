import styled from 'styled-components';

export const Section = styled.section`
  padding-top: ${props => props.theme.spacing(8)};

  :last-child {
    padding-bottom: ${props => props.theme.spacing(8)};
  }
`;
