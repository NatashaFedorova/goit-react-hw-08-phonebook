import styled from 'styled-components';

export const FilterInput = styled.input`
  flex-grow: 1;
  padding: ${props => props.theme.spacing(2)};
  border: ${props => props.theme.borders.normal};
  border-radius: ${props => props.theme.radii.normal};
  border-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeight.normal};
  margin: 0;

  &::placeholder {
    opacity: 0.3;
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: ${props => props.theme.fontWeight.normal};
    color: ${props => props.theme.colors.text};
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;
