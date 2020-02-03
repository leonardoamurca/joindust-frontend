import React, { useState, useEffect } from 'react';
import { Spin, message } from 'antd';

import ContactCard from '../../components/ContactCard';
import { PageTitle } from '../../components/PageTitle';
import useCallbackStatus from '../../utils/useCallbackStatus';
import { useUser } from '../../context/user';
import {
  Container,
  EmptyContacts,
  ContactsContainer,
} from './MyContactsStyles';

function MyContacts() {
  const recycler = useUser();
  const [contacts, setContacts] = useState([]);
  const { isPending, isRejected, error, run } = useCallbackStatus();

  useEffect(() => {
    run(recycler.getContacts()).then(res => {
      setContacts(res);
    });
  }, []);

  const onDeleteContact = async (id, corporateName) => {
    const res = await recycler.deleteContactById({ contactId: id });
    if (res.collectId !== 'undefined') {
      const filtered = contacts.content.filter(contact => contact.id !== id);

      message.success(`${corporateName} removido com sucesso!`);
      setContacts(prev => ({ ...prev, content: [...filtered] }));
    }
  };

  return (
    <Container>
      <PageTitle>Meus Contatos</PageTitle>
      <ContactsContainer>
        {contacts.length !== 0 && contacts.content.length !== 0 ? (
          contacts.content.map(contact => (
            <ContactCard
              id={contact.id}
              key={contact.id}
              corporateName={contact.corporateName}
              email={contact.email}
              phone={contact.phone}
              onDelete={onDeleteContact}
            />
          ))
        ) : isPending ? (
          <Spin size="default" />
        ) : (
          <EmptyContacts>Não há contatos adicionados!</EmptyContacts>
        )}
      </ContactsContainer>
    </Container>
  );
}

export default MyContacts;
