//-------------------------------------------------
// LEARN STYLES
// ------------------------------------------------

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  width: 100vw;
`;

export const Main = styled.main`
  display: flex;
  height: 100%;
  overflow: hidden;

  &.single {
    flex-direction: column;
    width: 98%;
    max-width: 768px;
    margin: 0 auto;
    .editor,
    .ql-editor {
      width: 100%;
      min-height: 75vh;
    }
  }

  &.double {
    flex-direction: row;
    .editor,
    .ql-editor {
      width: 50vw;
      min-height: 89vh;
    }
  }
`;

export const Card = styled.a`
  margin: 16px 0;
  background-color: #c4c4c4;
`;

export const YouTube = styled.iframe`
  width: 50vw;
`;

export const Editor = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
`;
