//-------------------------------------------------
// TOPIC DASHBOARD STYLES
// ------------------------------------------------

import styled from 'styled-components';
import './images/pencil.png';

export const TopicDashContainer = styled.section`
  max-width: 1255px;
  margin: 0px auto;

  h2{
    margin-top: 50px;
  }
  .resource-item-save {
    height: 40px;
    width: 95.19px;
    border-radius: 8px;
    background-color: #242424;
  }

  .resource-item-save p {
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0.65px;
    line-height: 28px;
    color: #ffffff;
    display: inline;
  }

  .name-of-resource {
    font-size: 1.4rem;
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .resource-info:hover {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  }

  .resource-view .resource-item-controls {
    visibility: visible;
  }

  .resource-item:hover .resource-item-controls {
    visibility: visible;
  }

  .resource-item-edit {
    margin-top: 15px;
    margin-right: 2px;
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
      margin: 10px 10px 10px 2px;
    }

    }
    .elipsis {
      width: 43px;
      margin-top: 12px;
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

  .resource-view:hover .checkbox {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
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
    display: flex;
    flex-direction: column;
  }

  li:first-child .resource-info {
    background-color: #f2ec27;
    border: none;
  }

  .add-resource-section {
    width: 75%;
    margin-left: 130px;
    border: 1.5px solid #d0d0d0;
    border-radius: 8px;

    label {
      display: block;
      font-color: pink;
      text-align: left;
    }

    input {
      height: 50px;
      outline: none;
      border: none;
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
  .completed-resources-list {
    list-style: none;
    width: 100%;
    padding: 50px;
  }
  .completed-resource-item {
    // height: 63px;
    // width: 100%;
    // max-width: 1090px;
    // border: 1.5px solid #aeaeae;
    // border-radius: 8px;
    // margin: 10px;
    // padding: 0px;
  }

  .elipsis {
    display: none;
  }
`;
