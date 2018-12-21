//-------------------------------------------------
// LEARN STYLES
// ------------------------------------------------

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  height: 100vh;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-basis: 100%;

  &.single {
    flex-direction: column;
    width: 98%;
    max-width: 768px;
    margin: 0 auto;
    .editor,
    .ql-editor {
      min-height: 63vh;
    }
  }

  &.double {
    flex-direction: row;
    .editor,
    .ql-editor {
      min-width: 50vw;
      min-height: 83vh;
    }
  }
`;

export const Card = styled.a`
  margin: 16px 0;
  background-color: #c4c4c4;
`;

export const YouTube = styled.iframe`
  min-width: 50vw;
`;

export const Editor = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
`;
