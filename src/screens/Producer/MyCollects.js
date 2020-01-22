import React from 'react';
import { useProducer } from '../../context/producer';

function MyCollects() {
  const producer = useProducer();

  return (
    <div>
      <h1>My Collects</h1>
      <ul>
        {producer.collections.content.map(collect => (
          <li>
            <div>Preço: R${collect.price}</div>
            <div>Quantidade: {collect.quantity}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyCollects;
