//-------------------------------------------------
// LANDING PAGE STYLES
// ------------------------------------------------

import hero from '../images/lines.png';
import styled from 'styled-components';

export const LandingContainer = styled.div`
text-align: center;

  .hero {
    margin: 0 auto;
    text-align: center;
    background: #aee192;

    .hero-graphics {
      padding: 160px 0;
      /* background: url(${hero}) no-repeat; */
    }
  }

  .hero-text {
    font-size: 1.8em;
    max-width: 900px;
    margin: 0 auto;
    margin-bottom: 60px;
  }

  h2 {
    background: #92E1B5;
    padding: 25px 18% 30px 18%;
  }

	.last-pitch {
		background: #8CBCF4;
	h2 {
		background: #8FCDE7;
	}
	}

section {

  max-width: 1255px;
  margin: 0 auto;

 div {
	margin-top: 160px;
	/* background: url(${hero}) no-repeat; */
	display: grid;
	grid-template-rows: 110px 1fr 200px;
justify-content: center;
	height: 100%;

	h3 {
		font-size: 2em;
		background: #F2EC27;
    padding: 0px 10px 4px 10px;
		margin-bottom: 60px;
		justify-self: center;
	}

	img {

		justify-self: center;
		width: 60%;
		border-radius: 8px;
		-webkit-box-shadow: 0px 8px 39px -3px rgba(0,0,0,0.08);
-moz-box-shadow: 0px 8px 39px -3px rgba(0,0,0,0.08);
box-shadow: 0px 8px 39px -3px rgba(0,0,0,0.08);
	}

	p {
		font-size: 1.5em;
		max-width: 960px;
		margin: 50px auto;
	}
 }
}

footer {
	background: #8CBCF4;
}
`;
