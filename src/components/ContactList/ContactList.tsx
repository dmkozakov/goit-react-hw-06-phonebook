import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactName } from './ContactName.styled';
import { ContactsList } from './ContactList.styled';
import { removeContact } from 'redux/contactsSlice';
import { useAppDispatch } from 'redux/hooks';

export const ContactList = () => {
  const dispatch = useAppDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <div>
              <ContactName>{name}</ContactName>: <span>{number}</span>
            </div>
            <button
              type="button"
              data-id={id}
              onClick={() => dispatch(removeContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ContactsList>
  );
};
