//-------------------------------------------------
// LANDING FORM STYLES
// ------------------------------------------------

import styled from 'styled-components';

export const Container = styled.main`
  font-family: omnes-pro, sans-serif;
  font-size: 0.8rem;
  text-align: center;

  @media (min-width: 475px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }

  .form-title {
    font-size: 2rem;
    margin: 40px 24px;

    @media (min-width: 475px) {
      font-size: 2.4rem;
      margin: 48px;
    }

    @media (min-width: 1024px) {
      font-size: 2.8rem;
      margin: 48px 64px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  padding: 0 12px;
  width: 98%;
  max-width: 480px;
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 2px 16px;
  margin-bottom: 24px;

  border: 2px solid black;
  border-radius: 8px;

  font-size: 1.4em;
  font-weight: 500;
`;

export const Label = styled.label`
  padding: 6px 0;
  font-size: 1.4em;
`;

export const Button = styled.button`
  width: 200px;
  padding: 18px 34px;
  margin: 16px 0;

  background: black;
  color: white;

  border: none;
  border-radius: 8px;

  font-size: 1.2em;
  letter-spacing: 1px;
  font-weight: 500;
  text-decoration: none;
`;
