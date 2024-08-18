import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './kv.scss'; 

function Kv() {
  return (
    <div className="wrap">
      <div className="overlay"></div>
      <Container>
        <Row>
          <Col sm={12} className="mx-auto">
            <div className="site-heading">
              <h1>Personal blog</h1>
              <span>Made by Hironori Takeuchi</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Kv;
