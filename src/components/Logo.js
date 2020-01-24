import React from 'react';
import { Container } from './LogoStyles';
import mobileLogo from '../assets/mobile-logo.png';
import treeLogo from '../assets/tree-logo.png';

function Logo({ type }) {
  const logoResolver = type => {
    switch (type) {
      case 'full-mobile':
        return mobileLogo;
      case 'onlyTree':
        return treeLogo;
      default:
        return mobileLogo;
    }
  };

  return (
    <Container>
      <img width="160px" alt="Logo" src={logoResolver(type)} />
    </Container>
  );
}

export default Logo;
