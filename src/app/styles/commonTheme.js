//-------------------------------------------------
// THEME STYLES FOR ENTIRE APP
// ------------------------------------------------

import styled from 'styled-components';

//OVERALL
export const Main = styled.main`
  h1 {
  }
  h2 {
  }

  h3 {
  }

  p {
  }

  a {
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
