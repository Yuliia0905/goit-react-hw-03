import css from './ContactForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const ContactsValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Ім'я контакту є обов'язковим")
    .min(3, "Ім'я контакту має бути мінімум 3 символи")
    .max(50, "Ім'я контакту має бути меншим за 50 символів"),
  number: Yup.string()
    .matches(
      phoneRegExp,
      "Номер телефону має співпадати з форматом 'xxx-xxx-xx-xx'"
    )
    .required("Номер телефону є обов'язковий"),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    const contactObject = {
      name: values.name,
      number: values.number,
    };

    onAddContact(contactObject);
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={ContactsValidationSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Іван Петров"
          />
          <ErrorMessage
            className={css.errorText}
            name="name"
            component="span"
          />
        </label>
        <label className={css.label}>
          Number
          <Field
            className={css.input}
            type="text"
            name="number"
            placeholder="050-123-45-67"
          />
          <ErrorMessage
            className={css.errorText}
            name="number"
            component="span"
          />
        </label>
        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
