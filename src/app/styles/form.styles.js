//-------------------------------------------------
// LANDING FORM STYLES
// ------------------------------------------------

import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  max-width: 320px;
`;

export const Input = styled.input`
  border: 1px solid $grey;
  width: 100%;
  height: 48px;
  padding: 16px;
  font-size: 1.2em;
`;

export const Label = styled.label`
  margin: 16px;
  font-size: 1.4em;
`;

export const Button = styled.button`
  text-decoration: none;
  border: none;
  margin: 16px 0;
  background: black;
  color: white;
  font-size: 1.4em;
  padding: 16px;
  width: 320px;
`;
