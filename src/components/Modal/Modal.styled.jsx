import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from 'components/constants/DefaultStyleComponents.styled';

export const Backdrop = styled.div`
  z-index: 2;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(3, 2, 2, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const ModalBox = styled.div`
  min-width: 400px;
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing(4)};
  border: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.accent};
`;
export const StyledBtn = styled(Button)`
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(1)};
  display: flex;
  border: none;
  margin-left: auto;
`;

export const Icon = styled(AiOutlineClose)``;
