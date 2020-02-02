import React, { useState, useEffect } from 'react';

import { PageTitle } from '../../components/PageTitle';
import {
  Container,
  ModalContainer,
  CorporateContainer,
  CorporateName,
  DataContainer,
  DataItem,
  DataLabel,
  Data,
} from './AllCollectsStyles';
import { useUser } from '../../context/user';
import useCallbackStatus from '../../utils/useCallbackStatus';
import ContactCollectCard from '../../components/ContactCollectCard';
import { isProducer } from '../../utils/constants';
import { Spin, Modal, Button, Avatar, Alert } from 'antd';

function AllCollects() {
  const recycler = useUser();
  const [collections, setCollections] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [successFeedback, setSuccessFeedback] = useState(null);
  const [errorFeedback, setErrorFeedback] = useState(null);
  const { isPending, isRejected, error, run } = useCallbackStatus();

  useEffect(() => {
    run(recycler.getAllCollections()).then(res => {
      setCollections(res);
    });
  }, []);

  const onShowProducer = user => {
    setCurrentUser(user);
    setIsModalVisible(true);
  };

  const onCloseModal = () => {
    setIsModalVisible(false);
    setCurrentUser(null);
    setSuccessFeedback(null);
    setErrorFeedback(null);
  };

  const onAddContact = async () => {
    const userId = currentUser.id;
    try {
      const res = await recycler.createContact({ userId });
      if (res) {
        setSuccessFeedback(res);
      }
    } catch (error) {
      setErrorFeedback(error);
    }
  };

  return (
    <Container>
      <PageTitle>Todas as coletas</PageTitle>
      {collections.length !== 0 && collections.content.length !== 0 ? (
        collections.content.map(collect => (
          <ContactCollectCard
            key={collect.id}
            id={collect.id}
            quantity={collect.quantity}
            price={collect.price}
            user={collect.user}
            showProducer={onShowProducer}
          />
        ))
      ) : isPending ? (
        <Spin size="default" />
      ) : (
        <h1>Sorry</h1>
      )}
      <Modal
        visible={isModalVisible}
        title="Dados do produtor"
        onOk={onAddContact}
        onCancel={onCloseModal}
        footer={[
          <Button onClick={onCloseModal} key="back">
            Fechar
          </Button>,
          <Button
            style={{
              backgroundColor: '#2C2C2D',
            }}
            key="submit"
            type="primary"
            loading={isPending}
            onClick={onAddContact}
          >
            Adicionar
          </Button>,
        ]}
      >
        {currentUser && (
          <ModalContainer>
            <CorporateContainer>
              <Avatar
                //src={profile.profileImage}
                shape="circle"
                size={80}
                icon="user"
              />
              <CorporateName>{currentUser.corporateName}</CorporateName>
            </CorporateContainer>
            <DataContainer>
              <DataItem>
                <DataLabel>E-mail: </DataLabel>
                <Data>{currentUser.email}</Data>
              </DataItem>
              <DataItem>
                <DataLabel>Telefone: </DataLabel>
                <Data>{currentUser.username}</Data>
              </DataItem>
            </DataContainer>
            {successFeedback && (
              <Alert
                style={{ width: '80%', marginTop: '20px' }}
                message={successFeedback.message}
                type="success"
                showIcon
              />
            )}
            {errorFeedback && (
              <Alert
                style={{ width: '80%', marginTop: '20px' }}
                message={errorFeedback.message}
                type="error"
                showIcon
              />
            )}
          </ModalContainer>
        )}
      </Modal>
    </Container>
  );
}

export default AllCollects;
