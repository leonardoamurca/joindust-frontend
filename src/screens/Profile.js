import React from 'react';
import {
  Container,
  CorporateContainer,
  CorporateName,
  CorporateRole,
  CollectsNumber,
  CollectsLabel,
  CollectsContainer,
  DataItem,
  DataLabel,
  Data,
  DataContainer,
} from './ProfileStyles';
import { Avatar, Spin } from 'antd';
import { useAuth } from '../context/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import { isProducer } from '../utils/constants';

function Profile() {
  const auth = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    auth.getUserProfile({ username: auth.data.user.username }).then(res => {
      setProfile(res);
    });
  }, []);

  return (
    <Container>
      {profile ? (
        <>
          <Avatar
            src={profile.profileImage}
            shape="circle"
            size={100}
            icon="user"
          />
          <CorporateContainer>
            <CorporateName>{profile.corporateName}</CorporateName>
            <CorporateRole>
              {isProducer(profile.roles[0].id) ? 'Produtor' : 'Reciclador'}
            </CorporateRole>
          </CorporateContainer>
          <CollectsContainer>
            {isProducer(profile.roles[0].id) && (
              <>
                <CollectsNumber>{profile.collectionsCount}</CollectsNumber>
                <CollectsLabel>Coletas cadastradas</CollectsLabel>
              </>
            )}
          </CollectsContainer>
          <DataContainer>
            <DataItem>
              <DataLabel>Cnpj: </DataLabel>
              <Data>{profile.cnpj}</Data>
            </DataItem>
            <DataItem>
              <DataLabel>E-mail: </DataLabel>
              <Data>{profile.email}</Data>
            </DataItem>
            <DataItem>
              <DataLabel>Telefone: </DataLabel>
              <Data>{profile.phone}</Data>
            </DataItem>
          </DataContainer>
        </>
      ) : (
        <Spin />
      )}
    </Container>
  );
}

export default Profile;
