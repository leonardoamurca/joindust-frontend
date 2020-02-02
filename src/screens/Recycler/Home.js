import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

import NavLink from '../../components/NavLink';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import { useAuth } from '../../context/auth';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

const LogoutButtonContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 16px;
`;

function Home({ children }) {
  const { logout } = useAuth();

  return (
    <Container>
      <Menu>
        <NavLink to="all-collects">Todas as coletas</NavLink>
        <NavLink to="my-contacts">Meus Contatos</NavLink>
        <NavLink to="profile">Perfil</NavLink>
        <LogoutButtonContainer>
          <Button icon="logout" onClick={logout}>
            Sair
          </Button>
        </LogoutButtonContainer>
      </Menu>
      {children}
      <Footer />
    </Container>
  );
}

export default Home;
