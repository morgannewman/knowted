//-------------------------------------------------
// DASHBOARD STYLES
// ------------------------------------------------

import styled from 'styled-components';

export const DashboardContainer = styled.section`
  max-width: 1255px;
  margin: 80px auto;
`;

export const RecentlyViewedContainer = styled.div`
  .recent-resources {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    list-style: none;
    padding: 0;
    margin-bottom: 60px;

    a {
      margin-right: 20px;
      :last-child {
        margin-right: 0;
      }

      :hover {
        color: #fff;
      }
    }

    li {
      border: 2px solid #d0d0d0;
      height: 111px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;

      :hover {
        border: 2px solid #aee192;
        background-color: #aee192;
      }
    }
  }
`;

export const AllTopicsContainer = styled.div`
  label,
  input {
    font-family: omnes-pro, sans-serif;
    font-weight: 300;
    font-size: 1.125rem;
  }

  .folders-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    .folder-wrap {
      text-align: center;
      margin-bottom: 20px;
      padding: 0 16px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      min-height: 155px;

      .folder {
        cursor: pointer;
        position: relative;
        margin: 0 auto;
        border: none;
        height: 108px;
        width: 144px;
        perspective: 720px;
        border-radius: 7px;

        ::before,
        ::after,
        span::before,
        span::after {
          content: '';
          position: absolute;
          border-radius: 7px;
        }

        ::before {
          width: 100%;
          height: 92%;
          bottom: 0;
          left: 0;
        }

        ::after {
          top: 0;
          left: 0;
          width: 40%;
          height: 50%;
          z-index: 1;
        }

        span {
          ::after {
            width: 90%;
            height: 85%;
            bottom: 0;
            left: 5%;
            background-color: #fff;
            z-index: 2;
            transition: transform 250ms ease 0ms;
            transform: translate3d(0px, 0px, 0px);
          }
          ::before {
            width: 100%;
            height: 92%;
            bottom: 0;
            left: 0;
            z-index: 3;
            content: '';
            transition: transform 500ms ease 0ms;
            transform-origin: 0 100% 0;
            outline: 1px solid transparent; /* Firefox anti-aliasing hack */
            transform-style: preserve-3d;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }

      .folder-open span::before {
        transform: rotateX(-35deg);
      }

      .edit-folder-form {
        display: inline-flex;
        flex-direction: row;

        input {
          border: none;
          outline: none;
          max-width: 126px;
          text-align: center;
          border-bottom: 1px dashed #d0d0d0;
        }
      }

      /* 1 */
      :nth-of-type(7n + 1) .folder::before,
      :nth-of-type(7n + 1) .folder::after {
        background-color: #93c079;
      }
      :nth-of-type(7n + 1) .folder span::before {
        background-color: #aee192;
      }

      /* 2 */
      :nth-of-type(7n + 2) .folder::before,
      :nth-of-type(7n + 2) .folder::after {
        background-color: #81c5a0;
      }
      :nth-of-type(7n + 2) .folder span::before {
        background-color: #92e1b5;
      }

      /* 3 */
      :nth-of-type(7n + 3) .folder::before,
      :nth-of-type(7n + 3) .folder::after {
        background-color: #80c4bd;
      }
      :nth-of-type(7n + 3) .folder span::before {
        background-color: #92e1d8;
      }

      /* 4 */
      :nth-of-type(7n + 4) .folder::before,
      :nth-of-type(7n + 4) .folder::after {
        background-color: #7ab0c7;
      }
      :nth-of-type(7n + 4) .folder span::before {
        background-color: #8fcde7;
      }

      /* 5 */
      :nth-of-type(7n + 5) .folder::before,
      :nth-of-type(7n + 5) .folder::after {
        background-color: #7aa6d9;
      }
      :nth-of-type(7n + 5) .folder span::before {
        background-color: #8cbcf4;
      }

      /* 6 */
      :nth-of-type(7n + 6) .folder::before,
      :nth-of-type(7n + 6) .folder::after {
        background-color: #7f93db;
      }
      :nth-of-type(7n + 6) .folder span::before {
        background-color: #8ca3f4;
      }

      /* 7 */
      :nth-of-type(7n + 7) .folder::before,
      :nth-of-type(7n + 7) .folder::after {
        background-color: #7d79d9;
      }
      :nth-of-type(7n + 7) .folder span::before {
        background-color: #8f8cf4;
      }
    }
  }

  .lonely-topics-container {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    text-align: center;

    .paper,
    .add-topic-btn {
      height: 136px;
      width: 112px;
      border: 2px solid #aeaeae;
      background: #fff;
      border-radius: 6px;
      margin: 0 auto;
    }

    .add-topic-btn {
      font-size: 1em;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 2px dashed #d0d0d0;
      color: #d0d0d0;
      outline: none;

      span {
        font-size: 3rem;
        padding: 0;
        line-height: 1;
        margin-top: 25px;
      }
    }

    .edit-delete-topic-options {
      display: inline-flex;
      flex-direction: column;
    }
  }
`;

export const JawBoneContainer = styled.div`
  min-height: 210px;

  span.arrow-up {
    position: relative;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 14px 10px 14px;
    border-color: transparent transparent #f1f1f1 transparent;
  }

  .jawbone-folder-items {
    position: absolute;
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    padding: 15px;
    background: #f1f1f1;
    border-radius: 6px;

    .topic-wrap {
      min-width: 100%;
    }
  }
`;
