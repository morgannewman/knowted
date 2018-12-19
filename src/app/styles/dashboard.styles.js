//-------------------------------------------------
// DASHBOARD STYLES
// ------------------------------------------------

import styled from 'styled-components';

export const DashboardContainer = styled.section`
  max-width: 1255px;
  margin: 80px auto;
`;

export const RecentlyViewed = styled.div`
  .recent-resources {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    list-style: none;
    padding: 0;

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
