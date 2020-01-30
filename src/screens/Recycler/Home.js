import React from 'react';
import { useAuth } from '../../context/auth';
import NavLink from '../../components/NavLink';
import Menu from '../../components/Menu';
import { Button } from 'antd';
import Footer from '../../components/Footer';

function Home({ children }) {
  const auth = useAuth();

  return (
    <>
      <Menu>
        <NavLink to="all-collects">Todas as coletas</NavLink>

        <div>
          <NavLink to="my-contacts">Meus Contatos</NavLink>
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
    </>
  );
}

export default Home;
