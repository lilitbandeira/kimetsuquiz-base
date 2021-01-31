import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from '../Link';

const StyledLink = styled(Link)`
  transition: .5s;
  color: ${({ theme }) => theme.colors.contrastText};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.secondary};
    transform: rotate(360deg) scale(1.5);
  }
`;

const Icon = styled.i`
  vertical-align: middle;
`;

export default function BackLinkArrow({ href, width, height}) {
  return (
    <StyledLink href={href} style={{ width: '25px', height: '25px', display: 'inline-block'}}>
      <Icon>
        <i class="fas fa-arrow-left"></i>
      </Icon>
    </StyledLink>
  );
}

BackLinkArrow.propTypes = {
  href: PropTypes.string.isRequired,
};