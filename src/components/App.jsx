import { useState, useEffect } from 'react';
import './App.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import initialContacts from '../data/contacts.json';
import { nanoid } from 'nanoid';

function App() {
  // const contactsFromLs = () => {
  //   const savedContactList = localStorage.getItem('contacts');
  //   return savedContactList !== null
  //     ? JSON.parse(savedContactList)
  //     : initialContacts;
  // };

  const [contacts, setContacts] = useState(() => {
    const savedContactList = localStorage.getItem('contacts');
    return savedContactList ? JSON.parse(savedContactList) : initialContacts;
  });

  console.log(initialContacts);

  const [searchContact, setSearchContact] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = event => {
    const value = event.target.value;

    setSearchContact(value);
  };

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(searchContact.toLowerCase());
  });

  const onAddContact = contact => {
    const finalContact = {
      ...contact,
      id: nanoid(),
    };

    setContacts([finalContact, ...contacts]);
  };

  const onDelContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div className="container">
      <h1 className="mainTitle">Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox searchContact={searchContact} onSearchChange={handleFilter} />
      <ContactList contacts={filteredContacts} onDelContact={onDelContact} />
    </div>
  );
}

export default App;
