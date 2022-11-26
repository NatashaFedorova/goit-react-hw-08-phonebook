import styled from 'styled-components';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { MdPublishedWithChanges } from 'react-icons/md';
import { MdWifiCalling3 } from 'react-icons/md';
import {
  Text,
  Button,
} from 'components/constants/DefaultStyleComponents.styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(2)};
  }
`;
export const Box = styled.div`
  display: flex;
  gap: 20px;
`;

export const About = styled(Text)``;

export const Delete = styled(Button)`
  padding: ${props => props.theme.spacing(3)};
`;

export const Call = styled.a`
  cursor: pointer;
  display: block;
  padding: ${props => props.theme.spacing(3)};
  border: ${props => `1px solid ${props.theme.colors.accent}`};
  border-radius: ${props => props.theme.radii.normal};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeight.medium};
  color: ${props => props.theme.colors.accent};
  background-color: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.light};
    background-color: ${props => props.theme.colors.accent};
  }
`;

export const Change = styled(Button)`
  padding: ${props => props.theme.spacing(3)};
`;

export const IconCall = styled(MdWifiCalling3)`
  width: 32px;
  height: 32px;
`;

export const IconDelete = styled(MdOutlineDeleteOutline)`
  width: 32px;
  height: 32px;
`;

export const IconChange = styled(MdPublishedWithChanges)`
  width: 32px;
  height: 32px;
`;
