import React from 'react';
import { Container } from './LogoStyles';
import mobileLogo from '../assets/mobile-logo.png';
import treeLogo from '../assets/tree-logo.png';
import navbarMenu from '../assets/navbar-menu.png';
import footer from '../assets/footer-logo.png';

function Logo({ type, centralized }) {
  const logoResolver = type => {
    switch (type) {
      case 'full-mobile':
        return <img width="160px" alt="Logo" src={mobileLogo} />;
      case 'onlyTree':
        return <img width="160px" alt="Logo" src={treeLogo} />;
      case 'navbar-menu':
        return <img width="140px" alt="Logo" src={navbarMenu} />;
      case 'footer':
        return <img width="140px" alt="Logo" src={footer} />;
      default:
        return mobileLogo;
    }
  };

  return (
    <Container isCentralized={centralized}>{logoResolver(type)}</Container>
  );
}

Logo.defaultProps = {
  centralized: true,
};

export default Logo;
