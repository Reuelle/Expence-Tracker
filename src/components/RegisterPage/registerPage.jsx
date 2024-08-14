// src/components/RegisterPage/RegisterPage.jsx
import React from 'react';
import * as Yup from 'yup';
import AuthForm from '../AuthForm/AuthForm'; // Import AuthForm component
import styles from './RegisterPage.module.css'; // Optional: For custom styling

// Define form fields, initial values, and validation schema
const formFields = [
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
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

// Define the submit function
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
