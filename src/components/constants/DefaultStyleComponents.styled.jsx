import { NavLink } from 'react-router-dom';
import { Field } from 'formik';
import styled from 'styled-components';

export const BaseMain = styled.main`
  padding: ${props => props.theme.spacing(8)} ${props => props.theme.spacing(4)};
`;

export const BaseTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeight.large};
`;

export const Button = styled.button`
  cursor: pointer;
  display: block;
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};
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

export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeight.normal};
  color: ${props => props.theme.colors.light};
  background-color: transparent;
`;

export const BaseStyledNavLink = styled(NavLink)`
  position: relative;
  font-weight: ${props => props.theme.fontWeight.mediumPlus};
  font-size: ${props => props.theme.fontSizes.medium};
  text-decoration: none;
  color: ${props => props.theme.colors.light};
  transition: opacity 0.3s cubic-bezier(0.51, 0.92, 0.24, 1);
  &::after {
    --scale: 0;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -25%;
    height: 3px;
    background: linear-gradient(135deg, #d7af8b, #ff7700);
    transform: scaleX(var(--scale));
    transform-origin: var(--x) 50%;
    transition: transform 0.3s cubic-bezier(0.51, 0.92, 0.24, 1);
  }
  &:hover:not(.active) {
    opacity: 1;
  }
  &:hover:not(.active)::after {
    --scale: 1;
  }
  &:focus-visible:not(.active) {
    color: ${props => props.theme.colors.accent};
  }
  &.active {
    color: ${props => props.theme.colors.accent};
  }
`;

export const BaseStyledInput = styled(Field)`
  position: relative;
  border: 0;
  border-bottom: 1px solid ${props => props.theme.colors.light};
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(6)};
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.light};
`;

export const BaseStyledLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeight.medium};
  margin-bottom: ${props => props.theme.spacing(8)};
  color: ${props => props.theme.colors.light};
`;

export const BaseStyledError = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  position: absolute;
  bottom: -32px;
  text-align: center;
  width: 100%;
  color: red;
`;
