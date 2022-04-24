import React, { useState, useEffect } from "react";
import "./styles.css";
import CardDetails from "./CardDetails";

import Axios from "axios";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  // call API
  const [details, setDeytails] = useState({});
  const fetchData = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");

    const details = data.results[0];

    setDeytails(details);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <CardDetails details={details} />
        </Col>
      </Row>
    </Container>
  );
}
