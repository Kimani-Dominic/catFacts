import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Container, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      age: '',
    },
    validate: (values) => {
      const errors = {};


      return errors;
    },
    onSubmit: async (values) => {
      try {
        
        navigate('/cat-fact');
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs" className="bg-gray-100 p-6 rounded-md shadow-md">
      <CssBaseline />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          {...formik.getFieldProps('email')}
          margin="normal"
          fullWidth
          className="mb-4"
        />
        <TextField
          label="Age"
          variant="outlined"
          {...formik.getFieldProps('age')}
          margin="normal"
          fullWidth
          className="mb-4"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Log In
        </Button>
      </form>
    </Container>
  );
}

export default LoginForm;
