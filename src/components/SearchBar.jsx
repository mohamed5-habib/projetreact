import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Control
        type="text"
        placeholder="Entrez une ville"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="mb-3"
      />
      <Button type="submit" variant="primary" className="w-100">Rechercher</Button>
    </Form>
  );
};

export default SearchBar;
