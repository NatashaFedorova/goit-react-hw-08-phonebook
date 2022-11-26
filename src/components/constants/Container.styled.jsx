import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 1200px;
  padding: 0 ${props => props.theme.spacing(4)};
  margin: 0 auto;
`;
