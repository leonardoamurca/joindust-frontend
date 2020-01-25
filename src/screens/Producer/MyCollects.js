import React, { useEffect, useState } from 'react';
import { message, Spin } from 'antd';
import { useProducer } from '../../context/producer';
import CollectCard from '../../components/CollectCard';
import { CollectsContainer, Container, Title } from './MyCollectsStyles';
import useCallbackStatus from '../../utils/useCallbackStatus';
import ErrorFeedback from '../../components/ErrorFeedback';

function MyCollects() {
  const producer = useProducer();
  const [collections, setCollections] = useState([]);
  const { isPending, isRejected, error, run } = useCallbackStatus();

  useEffect(() => {
    run(
      producer.getCollectionsCreatedBy({
        username: producer.user.username,
      })
    ).then(res => {
      setCollections(res);
    });
  }, []);

  const onDeleteCollect = async id => {
    const res = await producer.deleteCollectById({ collectId: id });
    if (res.collectId !== 'undefined') {
      const filtered = collections.content.filter(collect => collect.id !== id);

      message.success(`Coleta ${id} excluída com sucesso!`);
      setCollections(prev => ({ ...prev, content: [...filtered] }));
    }
  };
  return (
    <Container>
      <Title>Minhas Coletas</Title>
      {/*TODO: Create Component CollectList to list all collects*/}
      <CollectsContainer>
        {collections.length !== 0 && collections.content.length !== 0 ? (
          collections.content.map(collect => (
            <CollectCard
              key={collect.id}
              id={collect.id}
              quantity={collect.quantity}
              price={collect.price}
              user={collect.user}
              onDelete={onDeleteCollect}
            />
          ))
        ) : isPending ? (
          <Spin size="default" />
        ) : (
          <div style={{ textAlign: 'center' }}>Não há coletas cadastradas!</div>
        )}
        {isRejected && (
          <ErrorFeedback
            message={error && error.message}
            errorType={error && error.error}
            errors={error && error.errors}
          />
        )}
      </CollectsContainer>
    </Container>
  );
}

export default MyCollects;
