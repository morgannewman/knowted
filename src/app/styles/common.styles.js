//-------------------------------------------------
// THEME STYLES FOR ENTIRE APP
// ------------------------------------------------

import styled from 'styled-components';
import edit from '../images/edit.svg';
import cancel from '../images/cancel.svg';
import del from '../images/delete.svg';

//OVERALL
export const App = styled.div`
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
export const NavBar = styled.header`
  flex: none;
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-branding {
    display: flex;
    align-items: center;
    margin-left: 16px;

    font-family: ivyjournal, sans-serif;
    font-size: 1.3em;
    font-weight: bold;
    text-decoration: none;

    &:visited {
      color: inherit;
    }

    &-img {
      max-height: 36px;
      margin-right: 12px;
    }

    @media screen and (min-width: 500px) {
      font-size: 1.5em;

      &-img {
        max-height: 40px;
      }
    }

    @media screen and (min-width: 769px) {
      margin-left: 32px;
      font-size: 1.8em;
    }
  }

  .nav-link {
    margin-right: 16px;
    font-size: 1.1em;

    text-decoration: none;

    &:visited {
      color: inherit;
    }

    @media screen and (min-width: 500px) {
      font-size: 1.2em;
    }

    @media screen and (min-width: 769px) {
      margin-right: 32px;
      font-size: 1.3em;
    }
  }
`;

//BREADCRUMB
export const Breadcrumb = styled.nav`
  flex: none;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  @media (min-width: 769px) {
    flex-direction: row;
  }

  background-color: #b9de9a;

  font-family: omnes-pro, sans-serif;
  font-size: 1.3rem;

  .breadcrumbs-links {
    padding: 8px 8px 8px 16px;

    ${'' /* Truncate text instead of wrapping */}
    max-width: 100vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (min-width: 579px) {
      margin-left: 22px;
    }
    @media (min-width: 920px) {
      margin-left: 88px;
    }
  }

  a {
    color: black;
    text-decoration: none;

    &:last-child {
      text-decoration: underline;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    display: inline-block;
    padding: 0 8px;
  }

  button {
    flex-shrink: 0;
    color: white;
    background-color: black;
    border: none;

    font-family: omnes-pro, sans-serif;
    font-size: 1.4rem;

    padding: 12px;

    @media (min-width: 769px) {
      ${'' /* Resets height */}
      height: 0%;
      align-self: center;

      color: black;
      background-color: transparent;

      padding: 0 12px;
      margin-right: 22px;
      font-weight: 500;
    }

    @media (min-width: 920px) {
      margin-right: 88px;
    }
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
