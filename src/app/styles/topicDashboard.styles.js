//-------------------------------------------------
// TOPIC DASHBOARD STYLES
// ------------------------------------------------

import styled from 'styled-components';
import './images/pencil.png';

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
    display: flex;
    align-items: center;

    .elipsis {
      width: 43px;
      display: inline-block;
      transform: rotate(90deg);
    }
    .elipsis-dot {
      height: 5px;
      width: 5px;
      background-color: #e3e3e3;
      display: inline-block;
      border-radius: 50%;
      margin: 3px;
    }
  }

  .resource-view {
    width: 100%;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .name-of-resource {
      font-size: 1.4rem;
      border: 1px solid black;
      width: 50%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .checkbox {
      height: 40px;
      width: 39.96px;
      border: 1.5px solid #aeaeae;
      transform: scaleX(-1);
      border-radius: 3px;
    }
  }
  .resource-item:hover {
    box-shadow: 5px 4px 22px rgba(3, 30, 30, 0.808);
  }

  .resource-view .resource-item-controls {
    visibility: visible;
  }

  .resource-item:hover .resource-item-controls {
    visibility: visible;
  }

  .resource-item-edit {
    height: 50px;
  }

  .resource-item-delete {
    width: 50px;
    height: 50px;
    border: 1px solid black;
  }

  .active-title h3 {
    text-align: left;
    border: 1px solid black;
    display: inline-block;
    vertical-align: middle;
    margin-left: 0;
  }

  .add-resc-button {
    text-align: left;
    border: 1px solid black;
    display: inline-block;
    vertical-align: middle;
  }

  .resource-info {
    max-width: 1200px;
    // margin: 15px 0px 0px 30px;
    width: 100%;
    border: 1.5px solid #aeaeae;
    border-radius: 8px;
    padding: 10px 20px 15px 20px;
    margin-left: 10px;
  }
`;

export const ActiveResources = styled.section`
  .active-resources-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    border: 1px solid red;
    position: relative;
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
