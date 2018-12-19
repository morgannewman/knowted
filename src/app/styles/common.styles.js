//-------------------------------------------------
// THEME STYLES FOR ENTIRE APP
// ------------------------------------------------

import styled from 'styled-components';

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
  }

  h3 {
    font-family: omnes-pro, sans-serif;
    font-weight: 500;
    font-size: 1.625rem;
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

export const updateActionsButton = styled.button``;
export const DeleteButton = styled(updateActionsButton)``;
export const EditButton = styled(updateActionsButton)``;
export const CancelButton = styled(updateActionsButton)``;
