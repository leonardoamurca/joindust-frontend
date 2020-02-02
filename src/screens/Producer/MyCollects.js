import React, { useEffect, useState } from 'react';
import { message, Spin } from 'antd';

import CollectCard from '../../components/CollectCard';
import ErrorFeedback from '../../components/ErrorFeedback';
import useCallbackStatus from '../../utils/useCallbackStatus';
import { PageTitle } from '../../components/PageTitle';
import { useUser } from '../../context/user';
import {
  CollectsContainer,
  Container,
  EmptyCollections,
} from './MyCollectsStyles';

function MyCollects() {
  const producer = useUser();
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
      <PageTitle>Minhas Coletas</PageTitle>
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
          <EmptyCollections>Não há coletas cadastradas!</EmptyCollections>
        )}
        {isRejected && error && (
          <ErrorFeedback
            message={error.message}
            errorType={error.error}
            errors={error.errors}
          />
        )}
      </CollectsContainer>
    </Container>
  );
}

export default MyCollects;
