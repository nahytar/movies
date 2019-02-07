import React from "react";
import { Nav, Row, Col } from "react-bootstrap";

class Navigation extends React.Component {
  render = () => (
    <Row>
      <Col />
      <Col xs={8}>
        {" "}
        <Nav>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col />
    </Row>
  );
}

export default Navigation;
