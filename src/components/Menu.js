import React, { useState } from 'react';
import {
  Container,
  HamburgerMenuContainer,
  BackdropContainer,
} from './MenuStyles';
import Logo from './Logo';
import isMobile from '../utils/isMobile';
import { Button } from 'antd';

const Backdrop = ({ show, clicked }) =>
  show && <BackdropContainer onClick={clicked} />;

function Menu({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  const renderMenu = () => {
    if (isMobile()) {
      return (
        <>
          <Button
            onClick={() => setShowMenu(!showMenu)}
            type="link"
            icon="menu"
            size="large"
          />

          <Backdrop show={showMenu} clicked={() => setShowMenu(false)} />
          <HamburgerMenuContainer isOpen={showMenu}>
            {children}
          </HamburgerMenuContainer>
        </>
      );
    } else {
      return children;
    }
  };

  return (
    <Container>
      <Logo centralized={false} type="navbar-menu" />
      {renderMenu()}
    </Container>
  );
}

export default Menu;
