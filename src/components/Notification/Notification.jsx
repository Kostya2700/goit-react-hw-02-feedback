import React from 'react';
import PropTypes from 'prop-types';
export const Notification = ({ title }) => {
  return <h2>{title}</h2>;
};
Notification.propTypes = {
  title: PropTypes.string.isRequired,
};
