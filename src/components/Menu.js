import React, { useState } from 'react';
import {
  Container,
  HamburgerMenuContainer,
  BackdropContainer,
  AvatarContainer,
} from './MenuStyles';
import Logo from './Logo';
import isMobile from '../utils/isMobile';
import { Button, Avatar } from 'antd';
import { useAuth } from '../context/auth';
import { useUser } from '../context/user';

const Backdrop = ({ show, clicked }) =>
  show && <BackdropContainer onClick={clicked} />;

function Menu({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const { user } = useUser();

  const renderMenu = () => {
    if (isMobile()) {
      return (
        <>
          <Button
            onClick={() => setShowMenu(!showMenu)}
            style={{
              color: '#2C2C2D',
            }}
            type="link"
            icon="menu"
            size="large"
          />

          <Backdrop show={showMenu} clicked={() => setShowMenu(false)} />
          <HamburgerMenuContainer isOpen={showMenu}>
            <AvatarContainer>
              <Avatar
                src={user.profileImage}
                shape="circle"
                size={70}
                icon="user"
              />
            </AvatarContainer>
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
