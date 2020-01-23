import React, { useEffect } from 'react';
import { useProducer } from '../../context/producer';

function MyCollects() {
  const producer = useProducer();

  const deleteMe = () => {
    return producer.deleteCollectById({collectId: 19}).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <div>
      <h1>My Collects</h1>
      <ul>
        {producer.collections.content.map(collect => (
          <li key={collect.id}>
            <div>Preço: R${collect.price}</div>
            <div>Quantidade: {collect.quantity}</div>
          </li>
        ))}
      </ul>

      <button onClick={deleteMe}>Delete me</button>
    </div>
  );
}

export default MyCollects;
