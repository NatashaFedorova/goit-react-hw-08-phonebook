import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  padding: ${props => props.theme.spacing(8)} ${props => props.theme.spacing(4)};
  align-items: center;
  display: flex;
  justify-content: space-between;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background: linear-gradient(135deg, #d7c7b8, #ff7700);
  }
`;
