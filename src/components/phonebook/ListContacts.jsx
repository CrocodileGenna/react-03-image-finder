import PropTypes from 'prop-types';
import { LIST_UL, ONE_CONTACT_LI, BUTTUN } from './styled/ListContacts.styled';
export function ListContacts({ list, remove }) {
  return (
    <>
      <LIST_UL>
        {list.map(({ id, name, number }) => {
          return (
            <ONE_CONTACT_LI key={id}>
              <p>{name}</p>
              <p>{number}</p>
              <BUTTUN onClick={() => remove(id)}>Delete</BUTTUN>
            </ONE_CONTACT_LI>
          );
        })}
      </LIST_UL>
    </>
  );
}

ListContacts.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  remove: PropTypes.func.isRequired,
};
