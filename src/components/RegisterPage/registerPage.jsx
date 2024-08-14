// src/components/RegisterPage/RegisterPage.jsx
import React from 'react';
import * as Yup from 'yup';
import AuthForm from '../AuthForm/AuthForm'; // Import AuthForm component
import styles from './RegisterPage.module.css'; // Optional: For custom styling

// Define form fields, initial values, and validation schema
const formFields = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Enter your name',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
];

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});

const handleSubmit = (values) => {
  console.log('Form values:', values);
  // Handle form submission here
};

const RegisterPage = () => {
  return (
    <div className={styles.registerPage}>
      <header className={styles.header}>
        <h1>Register</h1>
      </header>
      <p className={styles.description}>
        Create a new account by filling out the form below.
      </p>
      <AuthForm
        formFields={formFields}
        submitButtonText="Register"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        navigation={{ href: '/login', text: 'Already have an account? Sign In' }}
      />
    </div>
  );
};

export default RegisterPage;
