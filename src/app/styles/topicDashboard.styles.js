//-------------------------------------------------
// DASHBOARD STYLES
// ------------------------------------------------

import styled from 'styled-components';

export const TopicDashContainer = styled.section`
  max-width: 1255px;
  margin: 0px auto;
  border: 1px solid black;
`;

export const ActiveResources = styled.section`
  .active-resources-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1213px;
    align-items: center;
    border: 1px solid black;
    overflow: scroll;
    height: 50vh;
  }

  .active-resources-list {
    border: 1px solid black;
    list-style: none;
    width: 100%;
    height: 53px;
  }

  .add-resource-section {
    background: pink;
    border: 1px solid black;
    // height: 800px;
  }
`;
