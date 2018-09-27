import React, { Component } from "react";

import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

let styles = {
  PickupSavings: {
    textDecoration: "underline"
  },
  totalSavngs: {
    color: "red",
    fontWeight: 800
  }
};

class PickupSavings extends Component {
  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        <p>
          Picking up your order in the store helps to cut cost and we pass the
          savings on to you
        </p>
      </Tooltip>
    );

    return (
      <Row className="show-grid">
        <Col md={6}>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <div style={styles.PickupSavings}>Pickup Savings</div>
          </OverlayTrigger>
        </Col>
        <Col style={styles.totalSavngs} md={6}>
          {`$${this.props.price}`}
        </Col>
      </Row>
    );
  }
}

export default PickupSavings;
