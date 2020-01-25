import React from 'react';
import { useAuth } from '../../context/auth';
import NavLink from '../../components/NavLink';
import Menu from '../../components/Menu';
import { Button } from 'antd';

function Home({ children }) {
  const auth = useAuth();

  return (
    <>
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
    </>
  );
}

export default Home;
