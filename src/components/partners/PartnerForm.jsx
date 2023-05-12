import React from 'react';
import { Form, Button } from 'react-bootstrap';

const PartnerForm = ({ onSubmit }) => {
  const [inputName, setInputName] = React.useState('');
  const [inputEmail, setInputEmail] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      onSubmit({ name: inputName, email: inputEmail });
      setInputName('');
      setInputEmail('');
    }
  };

  const validateForm = () => inputName.trim() !== '' && inputEmail.trim() !== '';

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control className='mb-3'
          type='text'
          placeholder='Ingresa el nombre del colaborador'
          value={inputName}
          onChange={({ target: { value } }) => setInputName(value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control className='mb-3'
          type='email'
          placeholder='Ingresa el correo del colaborador'
          value={inputEmail}
          onChange={({ target: { value } }) => setInputEmail(value)}
        />
      </Form.Group>
      <Button variant='primary' type='submit' disabled={!validateForm()}>
        Agregar
      </Button>
    </Form>
  );
}

export default PartnerForm;