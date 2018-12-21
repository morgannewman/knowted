//-------------------------------------------------
// TOPIC DASHBOARD STYLES
// ------------------------------------------------

import styled from 'styled-components';
import del from '../images/delete.svg';

export const TopicDashContainer = styled.section`
  max-width: 1265px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items-center

  ul{
padding:0;
  }

  li{
    margin: 5px 0px;
  }

  h2{
    margin-top: 50px;
    padding-left: 50px;
  }
 
  .resource-info:hover {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  }


  .resource-view .resource-item-controls {
    visibility: hidden;
  }

  .resource-view:hover .resource-item-controls {
    visibility: visible;
  }

  .resource-edit-view  .resource-item-controls{
    visibility: hidden;
  }


  .resource-item-edit {
    margin-right: 2px;
    background-position:right;
    text-indent: 300%;
  }

  .resource-item-delete {
    background: url(${del}) no-repeat;
    border: none;
    width: 35px;
    height: 35px;
    margin: 10px 20px;
    /* Hide the text. */
    text-indent: 300%;
    white-space: nowrap;
    overflow: hidden;

  }

  .add-resource-section,
  .resource-edit-view,
  .resource-view {
    display: flex;
    flex-direction: row;
    align-items: center;


    .checkbox {
      height: 40px;
      width: 38px;
      min-width: 38px
      border: 1.5px solid #aeaeae;
      border-radius: 3px;
      margin: 10px 10px 10px 2px;
      /* Hide the text. */
      text-indent: 180%;
      white-space: nowrap;
      overflow: hidden;
    }

    .checked-box {
      height: 40px;
      width: 38px;
      border: 1.5px solid #aeaeae;
    
      border-radius: 3px;
      margin: 10px 10px 10px 2px;
      font-family: 'Knewave', cursive;
      font-size: 36px;
      color: #242424;
      letter-spacing: 0.6px;
      line-height: 35px;
    }
    .elipsis {
      width: 43px;
      margin-top: 12px;
      height: 40px;
      display: inline-block;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left:-10px
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
  
 
    
 
  .resource-view:hover .checkbox {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  }



  
  .resource-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-flow: row wrap;
    max-width: 1200px;  
    min-width: 200px;
    width: 100%;
    border: 1.5px solid #aeaeae;
    border-radius: 8px;
    padding: 10px 20px 15px 20px;
    position: relative;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
 
    div{
      margin-right: 10px;
    }

    .name-of-resource {
      max-width: 60%;
      min-width: 150px
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      font-family: omnes-pro, sans-serif;
      font-size: 	1.4rem;
      color: #242424;
      font-weight: 500;
  
    }
  
    .resc-uri {

      max-width: 500px;
      min-width: 200px;
      font-size: 1.375rem;
      width: 30%;
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

    form{
      input{
      background-color: transparent;
      border: none;
      width:200px;
      font-family: omnes-pro, sans-serif;
      font-size: 	1.5rem;
      color: #242424;
      font-weight: 500;

      }
      input:focus{
        border:none;
        outline:none;
        }
    }

  }
`;

export const ActiveResources = styled.section`
  .add-resc-button {
    outline: none;
    font-size: 1.125rem;
    border: none;
    span {
      padding-top: 8px;
      line-height: 1.5rem;
      margin: 0px 5px;
    }
    text-transform: uppercase;
    .plus {
      font-size: 2.5rem;
      line-height: 1.5rem;
      padding: 0px;
    }
  }

  .save-btn-show {
    text-transform: uppercase;
    position: relative;
    align-self: right;
    background-color: #242424;
    max-width: 95.19px;

    height: 49.52px;
    border-radius: 8px;
    font-family: omnes-pro, sans-serif;
    color: #fff;
  }

  .save-btn-hide {
    display: none;
  }
  .active-resources-list {
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  li:first-child .resource-info {
    background-color: #f2ec27;
    border: none;
  }

  .active-header {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .active-header h3 {
    margin: 0;
    width: 50%;
    padding-left: 50px;
  }

  .active-header .add-button-cont {
    width: 50%;
    text-align: right;
  }
  .active-header .add-button-cont button {
    margin-right: 80px;
  }

  .resource-edit-view {
    .resource-info {
      padding: 0px;
      position: relative;
    }
  }

  .add-resource-section {
    .elipsis {
      visibility: hidden;
    }

    .resource-item-controls {
      visibility: hidden;
    }

    .label-hidden {
      display: none;
      font-size: 1rem;
    }

    .uri-input {
      border: none;

      font-family: omnes-pro, sans-serif;
      font-style: italic;
      font-size: 22px;
      letter-spacing: 0.55px;
      line-height: 28px;
      color: #242424;
    }

    .uri-input:focus {
      border: none;
      outline: none;
    }

    .title-input {
      border: none;
      font-family: omnes-pro, sans-serif;
      font-size: 1.4rem;
      color: #242424;
      font-weight: 500;
      margin-right: 20px;
      min-width: 50%;
    }

    .title-input:focus {
      border: none;
      outline: none;
    }
  }
`;

export const CompleteResources = styled.section`
  .completed-resources-list {
    list-style: none;
    padding: 0px;
  }

  .complete-header {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .complete-header h3 {
    margin: 0;
    width: 50%;
    padding-left: 50px;
  }

  .complete-header .show-button-cont {
    width: 50%;
    text-align: right;
  }
  .complete-header .show-button-cont button {
    margin-right: 80px;
  }

  .elipsis {
    display: none;
  }

  .resource-item-edit {
    visibility: visible;
    margin-left: 40px;
  }

  .save-btn-hide {
    display: none;
  }

  .completed-resource-item .resource-view .ellipses {
    visibility: hidden;
  }

  .toggle-compl-btn {
    border: none;
    background: none;
  }
  .show-caret {
    margin: 0px 10px;
  }

  .hide-caret {
    margin: 0px 10px;
    font-size: 2rem;
    display: inline-block;
    border: 1px solid black;
    vertical-align: bottom;
  }
`;
