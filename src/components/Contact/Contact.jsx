import css from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';

const Contact = ({ name, number, id, onDelContact }) => {
  return (
    <li className={css.item}>
      <p className={css.name}>
        <IoPersonSharp className={css.icon} />
        {name}
      </p>
      <p className={css.number}>
        <FaPhoneAlt className={css.icon} />
        {number}
      </p>
      <button
        className={css.delBtn}
        type="button"
        onClick={() => onDelContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
