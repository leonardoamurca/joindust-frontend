import React, { useEffect, useState } from 'react';
import { useProducer } from '../../context/producer';
import CollectCard from '../../components/CollectCard';
import { CollectsContainer, Container, Title } from './MyCollectsStyles';

function MyCollects() {
  const producer = useProducer();
  const [collections, setCollections] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCollections() {
      const res = await producer.getCollectionsCreatedBy({
        username: producer.user.username,
      });

      if (typeof res.content !== 'undefined') {
        setCollections(res);
      } else {
        setError(res);
      }
    }

    fetchCollections();
  }, []);

  const onDeleteCollect = async id => {
    await producer.deleteCollectById({ collectId: id });
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
        ) : (
          <div style={{ textAlign: 'center' }}>Não há coletas cadastradas!</div>
        )}
      </CollectsContainer>
    </Container>
  );
}

export default MyCollects;
