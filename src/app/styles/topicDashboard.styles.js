//-------------------------------------------------
// TOPIC DASHBOARD STYLES
// ------------------------------------------------

import styled from 'styled-components';

export const TopicDashContainer = styled.section`
  max-width: 1255px;
  margin: 0px auto;

  .resource-item {
    height: 63px;
    width: 100%;
    max-width: 1090px;
    border: 1.5px solid #aeaeae;
    border-radius: 8px;
    margin: 10px;
  }

  .resource-view:hover {
    box-shadow: 5px 4px 22px rgba(3, 30, 30, 0.808);
  }

  .resource-view .resource-item-controls {
    visibility: hidden;
  }

  .resource-view:hover .resource-item-controls {
    visibility: visible;
  }
`;

export const ActiveResources = styled.section`
  .active-resources-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    max-width: 1213px;
  }

  .active-resources-list {
    list-style: none;
    width: 100%;
    padding: 50px;
  }

  .resource-item:first-child {
    background-color: #f2ec27;
  }

  .add-resource-section {
    max-width: 1090px;
    margin: 10px;
    width: 100%;
    border: 1.5px solid #aeaeae;
    border-radius: 8px;
    padding: 10px 20px 15px 20px;

    label {
      display: block;
      font-color: pink;
      text-align: left;
    }

    input {
      height: 50px;
      outline: none;
      padding: 10px;
      width: 100%;
    }

    .label-hidden {
      display: none;
    }

    .label-show {
      display: block;
    }
  }
`;

export const CompleteResources = styled.section`
  .completed-resources-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    max-width: 1213px;
    margin-bottom: 50px;
  }

  .completed-resources-list {
    list-style: none;
    width: 100%;
    padding: 50px;
  }

  .resource-item {
    height: 63px;
    width: 100%;
    max-width: 1090px;
    border: 1.5px solid #aeaeae;
    border-radius: 8px;
    margin: 10px;
  }
`;
