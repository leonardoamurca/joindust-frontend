import React from 'react';
import { StyledLink } from './NavLinkStyles';

export default ({ partial = true, ...props }) => (
  <StyledLink
    {...props}
    getProps={({ isCurrent, isPartiallyCurrent }) => {
      const isActive = partial ? isPartiallyCurrent : isCurrent;
      return {
        style: {
          color: isActive ? 'white' : '#2C2C2D',
          backgroundColor: isActive ? '#2C2C2D' : 'white',
        },
      };
    }}
  />
);
