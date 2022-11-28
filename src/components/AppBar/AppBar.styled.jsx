import styled from 'styled-components';
import { RiSunLine } from 'react-icons/ri';
import { BiMoon } from 'react-icons/bi';

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

export const Box = styled.div`
  margin-left: 30px;
  width: 25px;
  height: 25px;
  position: relative;
`;

export const Toggle = styled.input`
  cursor: pointer;
  height: 25px;
  width: 25px;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
`;

export const IconMoon = styled(BiMoon)`
  width: 25px;
  height: 25px;
  color: ${props => props.theme.icon};
`;

export const IconSun = styled(RiSunLine)`
  width: 25px;
  height: 25px;
  color: ${props => props.theme.icon};
`;
