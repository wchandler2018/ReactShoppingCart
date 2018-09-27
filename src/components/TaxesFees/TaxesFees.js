import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class TaxesFees extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}>Est. taxes & fees(based on 28212)</Col>
        <Col>{`$${this.props.taxes}`}</Col>
      </Row>
    );
  }
}

export default TaxesFees;
