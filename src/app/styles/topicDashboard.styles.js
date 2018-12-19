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

    .elipsis {
      width: 43px;
      display: inline-block;
      position: relative;
      left: -80px;
      transform: rotate(90deg);
      top: 35px;
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

    .name-of-resource {
      font-size: 1.4rem;
      margin-right: 20px;
    }

    .checkbox {
      height: 40px;
      width: 39.96px;
      border: 1.5px solid #aeaeae;
      transform: scaleX(-1);
      border-radius: 3px;
      left: 40px;
    }
  }
  .resource-item:hover {
    box-shadow: 5px 4px 22px rgba(3, 30, 30, 0.808);
  }

  .resource-view .resource-item-controls {
    visibility: hidden;
  }

  .resource-view:hover .resource-item-controls {
    visibility: visible;
  }

  .resource-item-controls {
    .resource-item-edit {
      background-color: red;
      position: relative;
      bottom: 70px;
      right: 50px;
      margin: 10px;
    }
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

  .resource-item:first-child {
    background-color: #f2ec27;
  }

  .add-resource-section {
    max-width: 1200px;
    // margin: 15px 0px 0px 30px;
    width: 100%;
    display: block;
    border: 1.5px solid #aeaeae;
    border-radius: 8px;
    padding: 10px 20px 15px 20px;
    margin-left: 10px;

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
