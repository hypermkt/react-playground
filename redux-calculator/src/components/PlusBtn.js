import React from 'react';
import PropTypes from 'prop-types';

const PlusBtn = ({onClick}) => (
  <button onClick={onClick}>+</button>
);

PlusBtn.propType = {
  onClick: PropTypes.func.isRequired,
};

export default PlusBtn;