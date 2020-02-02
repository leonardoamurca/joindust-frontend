import React from 'react';
import { useAuth } from '../../context/auth';
import NavLink from '../../components/NavLink';
import Menu from '../../components/Menu';
import { Button } from 'antd';
import Footer from '../../components/Footer';
import styled from 'styled-components';

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
        <NavLink to="new-collect">Criar Coleta</NavLink>
        <NavLink to="my-collects">Minhas Coletas</NavLink>
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
