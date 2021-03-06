
import React from 'react';
import PropTypes from 'prop-types';

const Trash = ({ height, width }) => (
  <svg height={height} width={width} viewBox="0 0 22 32" id="trash">
    <path
      d="M6.7971 10.6V28.6M11.1449 10.6V28.6M15.4928 10.6V28.6M14.4783 1.4H7.52174V4.2H14.4783V1.4ZM7.23188 1H14.7681V4.4H21V8.4H18.8261V31H3.17391V8.4H1V4.4H7.23188V1ZM1.28986 8V4.8H20.7101V8H1.28986ZM3.46377 8.6H18.5362V30.6H3.46377V8.6Z"
      stroke="black"
      strokeWidth="0.75"
    />
  </svg>
);

Trash.defaultProps = {
  height: '30px',
  width: '20px',
};

Trash.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

export default Trash;
