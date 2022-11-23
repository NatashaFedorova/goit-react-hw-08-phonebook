import styled from 'styled-components';

export const SectionEl = styled.section`
  padding-top: ${props => props.theme.spacing(8)};

  :last-child {
    padding-bottom: ${props => props.theme.spacing(8)};
  }
`;

export const Container = styled.div`
  position: relative;
  width: 600px;
  padding: 0 ${props => props.theme.spacing(4)};
  margin: 0 auto;
`;
