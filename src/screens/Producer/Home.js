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

function Home({ children }) {
  const auth = useAuth();

  return (
    <Container>
      <Menu>
        <NavLink to="new-collect">Criar Coleta</NavLink>

        <div>
          <NavLink to="my-collects">Minhas Coletas</NavLink>
        </div>
        <div>
          <NavLink to="profile">Perfil</NavLink>
        </div>

        <div style={{ position: 'absolute', bottom: '30px', left: '16px' }}>
          <Button icon="logout" onClick={auth.logout}>
            Sair
          </Button>
        </div>
      </Menu>
      {children}
      <Footer />
    </Container>
  );
}

export default Home;
