import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <img width="350" src="https://moldura-pop.s3.sa-east-1.amazonaws.com/imagens-proprietarias/99930373-VLuoquePAdztjWAC8k-j3_mv8wXgq_P_-cropped-1x1-browser.png"></img>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  opacity: 0.5;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;