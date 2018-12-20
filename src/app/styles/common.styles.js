//-------------------------------------------------
// THEME STYLES FOR ENTIRE APP
// ------------------------------------------------

import styled from 'styled-components';
import edit from '../images/edit.svg';
import cancel from '../images/cancel.svg';
import del from '../images/delete.svg';

//OVERALL
export const Main = styled.main`
  :root {
    font-size: 16px;
  }

  h1 {
    font-family: ivyjournal, sans-serif;
    font-size: 2.875rem;
  }
  h2 {
    font-family: ivyjournal, sans-serif;
    font-size: 1.875rem;
    margin: 0 0 40px 0;
  }

  h3 {
    font-family: omnes-pro, sans-serif;
    font-weight: 500;
    font-size: 1.625rem;
    margin: 0 0 20px 0;
  }

  p,
  span {
    font-family: omnes-pro, sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
  }

  a {
    color: #242424;
    text-decoration: none;
  }
`;

//NAVIGATION

export const NavBar = styled.nav``;

export const LandingNavBar = styled(NavBar)``;

//BREADCRUMB
export const Breadcrumb = styled.nav`
  background-color: #f1f1f1;

  a {
  }
`;

//SIGN UP & LOGIN FORM

export const Label = styled.label``;

export const Input = styled.input``;

//BUTTONS
export const Button = styled.button``;
export const ButtonComplete = styled(Button)``;

export const updateActionsButton = styled.button`
  border: none;
  width: 26px;
  height: 26px;
  margin: 0 5px;
  /* Hide the text. */
  text-indent: 160%;
  white-space: nowrap;
  overflow: hidden;
`;
export const DeleteButton = styled(updateActionsButton)`
  background: url(${del}) no-repeat;
`;
export const EditButton = styled(updateActionsButton)`
  background: url(${edit}) no-repeat;
`;
export const CancelButton = styled(updateActionsButton)`
  background: url(${cancel}) no-repeat;
  margin-top: 5px;
`;
