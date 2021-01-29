import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

export default function RestartLink({ href }) {
  return (
      <Link href={href}/> 
  );
}

RestartLink.propTypes = {
  href: PropTypes.string.isRequired,
};