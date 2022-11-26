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

export const Call = styled(Button)`
  padding: ${props => props.theme.spacing(3)};
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
