import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Guest = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Task Manager </h1>
          <p className="lead">Hear register</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Guest;