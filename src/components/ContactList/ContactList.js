import { getContacts } from "redux/phonebook/selectors";
import ContactListItem from "components/ContactListItem";
import { List, Text, Span } from "./ContactList.styled";
import { FcContacts } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/phonebook/operations";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getFilter } from "redux/phonebook/selectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const filteredContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase().trim())
  );
  return (
    <List>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ name, number, id }) => {
          return (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              onDelete={() => dispatch(deleteContact(id))}
            />
          );
        })
      ) : (
        <Text>
          <Span>
            <FcContacts />
          </Span>
          No contacts listed
        </Text>
      )}
    </List>
  );
};

export default ContactList;
