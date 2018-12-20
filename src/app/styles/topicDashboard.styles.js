//-------------------------------------------------
// TOPIC DASHBOARD STYLES
// ------------------------------------------------

import styled from 'styled-components';
import './images/pencil.png';

export const TopicDashContainer = styled.section`
  max-width: 1255px;
  margin: 0px auto;

  .name-of-resource {
    font-size: 1.4rem;
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .resource-info:hover {
    box-shadow: 5px 4px 22px rgba(3, 30, 30, 0.808);
  }

  .resource-view .resource-item-controls {
    visibility: hidden;
  }

  .resource-item:hover .resource-item-controls {
    visibility: visible;
  }

  .resource-item-edit {
  }

  .resource-item-delete {
  }

  .resource-view {
    display: flex;
    margin: 10px;

    .checkbox {
      height: 40px;
      width: 39.96px;
      border: 1.5px solid #aeaeae;
      transform: scaleX(-1);
      border-radius: 3px;
    }

    .elipsis {
      width: 43px;
      height: 40px;
      display: inline-block;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .elipsis-dot {
      height: 8px;
      width: 8px;
      background-color: #e3e3e3;
      display: inline-block;
      border-radius: 50%;
      margin: 0 auto;
      margin: 2px;
    }
  }

  .resource-info {
    max-width: 1200px;
    width: 100%;
    border: 1.5px solid #aeaeae;
    border-radius: 8px;
    padding: 10px 20px 15px 20px;
    margin-left: 10px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ActiveResources = styled.section`
  .active-resources-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    border: 1px solid red;
  }

  .active-resources-list {
    list-style: none;
    width: 100%;
    padding: 10px 90px;
    border: 1px solid blue;
  }

  li:first-child .resource-info {
    background-color: #f2ec27;
    border: none;
  }

  .add-resource-section {
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

     {
      color: #e3e3e3;
      font-size: 2.1875rem;
      left: 30px;
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

  .completed-resource-item {
    height: 63px;
    width: 100%;
    max-width: 1090px;
    border: 1.5px solid #aeaeae;
    border-radius: 8px;
    margin: 10px;
    padding: 0px;
  }
`;
