//-------------------------------------------------
// TOPIC DASHBOARD STYLES
// ------------------------------------------------

import styled from 'styled-components';
import del from '../images/delete.svg';
export const TopicDashContainer = styled.section`
  max-width: 1255px;
  margin: 0px auto;
  ul{
    all:unset;
  }

  h2{
    margin-top: 50px;
  }
 
  .resource-info:hover {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  }

  .resource-view .resource-item-controls {
    visibility: hidden;
  }

  .resource-item:hover .resource-item-controls {
    visibility: visible;
  }

  .resource-item-edit {
    margin-top: 15px;
    margin-right: 2px;
  }

  .resource-item-delete {
    background: url(${del}) no-repeat;
    border: none;
    width: 35px;
    height: 35px;
    margin: 10px 20px;
    /* Hide the text. */
    text-indent: 160%;
    white-space: nowrap;
    overflow: hidden;

  }

  .resource-view {
    display: flex;
    flex-direction: row;
    align-items: center;

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
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1200px;  
    min-width: 200px;
    width: 100%;
    border: 1.5px solid #aeaeae;
    border-radius: 8px;
    padding: 10px 20px 15px 20px;
    margin-left: 10px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    div{
      margin-right: 10px;
    }

    .name-of-resource {
      max-width: 300px;
      min-width: 150px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      font-family: omnes-pro, sans-serif;
      font-size: 	1.5rem;
      color: #242424;
      font-weight: 500;
  
    }
  
    .resc-uri {
      max-width: 500px;
      min-width: 200px;
      font-size: 1.375rem;
      width: 50%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      font-family: omnes-pro, sans-serif;
      font-style: italic;
      font-size: 22px;
      letter-spacing: 0.55px;
      line-height: 28px;
      color: #242424;
  
    }

  }
`;

export const ActiveResources = styled.section`
  .active-resources-container {
    border: 1px solid red;
  }

  .active-resources-list {
    list-style: none;
    width: 100%;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
  }

  li:first-child .resource-info {
    background-color: #f2ec27;
    border: none;
  }

  .add-resource-section {
    // margin-left: 135px;
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

  .resource-edit-form {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .resource-edit-form div {
    max-width: 400px;
  }

  .resource-edit-form div p {
    max-width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;

    vertical-align: center;
  }

  .resource-edit-form input {
    margin-right: 20px;
    outline: none;
    border: none;
    border-bottom: 1px dashed black;
    height: 40px;
    width: 30%;
    min-width: 200px;
    font-size: 20px;
  }

  .resource-item-save {
    height: 25px;
    width: 50px;
    border-radius: 8px;
    background-color: #242424;

    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0.65px;
    line-height: 28px;
    color: #ffffff;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
  }

  .active-header {
    border: 1px solid pink;
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .active-header h3 {
    margin: 0;
    border: 1px solid black;
    width: 50%;
  }

  .active-header .add-button-cont {
    border: 1px solid black;
    width: 50%;
    text-align: right;
  }
  .active-header .add-button-cont button {
    border: 1px solid black;
    margin-right: 80px;
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
