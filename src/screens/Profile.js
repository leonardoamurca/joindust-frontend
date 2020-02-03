import React, { createRef } from 'react';
import { Avatar, Spin, message } from 'antd';

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
  AvatarContainer,
} from './ProfileStyles';

import { useAuth } from '../context/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import { isProducer } from '../utils/constants';
import { uploadImage } from '../services/auth-client';
import toBase64 from '../utils/toBase64';
import compressImage from '../utils/compressImage';
import ErrorFeedback from '../components/ErrorFeedback';

function Profile() {
  const auth = useAuth();
  const [profile, setProfile] = useState(null);
  const [successFeedback, setSuccessFeedback] = useState(null);
  const [errorFeedback, setErrorFeedback] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = createRef();

  useEffect(() => {
    auth.getUserProfile({ username: auth.data.user.username }).then(res => {
      setProfile(res);
    });
  }, []);

  const onClickUploadFile = () => {
    inputRef.current.click();
  };

  const onChangeProfileImage = async e => {
    setErrorFeedback(null);
    setSuccessFeedback(null);
    const file = e.target.files[0];

    try {
      setIsLoading(true);
      const base64File = await toBase64(file);
      const compressedImage = await compressImage(base64File);
      const uploadedImage = await uploadImage({
        profileImage: compressedImage,
      });

      if (uploadedImage && uploadedImage.success) {
        setIsLoading(false);
        const res = await auth.updateProfileImage({
          profileImage: uploadedImage.link,
        });

        if (res) {
          auth
            .getUserProfile({ username: auth.data.user.username })
            .then(response => {
              setProfile(response);
              setSuccessFeedback(res);
            });
        }
      }
    } catch (error) {
      setIsLoading(false);
      setErrorFeedback(error);
    }
  };

  const renderSuccessFeedback = () => {
    return message.success(successFeedback.data.message);
  };

  const renderErrorFeedback = () => {
    return message.error(errorFeedback.method + ' ' + errorFeedback.status);
  };

  return (
    <Container>
      {profile ? (
        <>
          <AvatarContainer onClick={onClickUploadFile}>
            {isLoading && (
              <Spin
                size="default"
                style={{
                  zIndex: '200',
                  left: '40px',
                  top: '40px',
                  position: 'absolute',
                }}
              />
            )}

            <Avatar
              src={profile.profileImage}
              shape="circle"
              size={100}
              icon="user"
            />
            <input
              ref={inputRef}
              onChange={onChangeProfileImage}
              multiple={false}
              style={{ display: 'none' }}
              type="file"
              accept="image/png, image/jpeg"
            />
            {successFeedback && renderSuccessFeedback()}
          </AvatarContainer>
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
      {errorFeedback && renderErrorFeedback()}
    </Container>
  );
}

export default Profile;
