import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const SearchBar = ({ onSearch })  => {

  const handleChange = (event) => {
    const searchValue = event.target.value;
    onSearch(searchValue);
  };

  return (
    <header style={{backgroundColor: 'black'}}>
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col sm={6}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder='Buscar Colaboradores'
              className="me-2 rounded-pill"
              aria-label="Search"
              onChange={handleChange}
            />
          </Form>
        </Col>
      </Row>
    </Container>
    </header>
  );
}

export default SearchBar;