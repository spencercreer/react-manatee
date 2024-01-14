import React from "react";
import { useNavigate } from "react-router-dom";
import Page from "../components/Page";
import Container from "../components/Container";
import Row from "../components/Row";
import Card from "../components/Card";
import Button from "../components/Button";

export default function ProspectSequence() {
  const navigate = useNavigate();
  return (
    <Page>
      <Container>
        <Row className="mb-1 p-2">
          <h2>Kelly Spicers</h2>
        </Row>
        <Row className="mb-1 p-2">
          <h1>Campaign Sequence</h1>
        </Row>
        <Container>
          <Row className="space-x-4">
            <Card>
              <h3>Ideal Client</h3>
              <Button onClick={() => navigate("/prospect/contacts")}>
                Select Sequence
              </Button>
            </Card>
            <Card>
              <h3>Ideal Client</h3>
              <Button onClick={() => navigate("/prospect/contacts")}>
                Select Sequence
              </Button>
            </Card>
            <Card>
              <h3>Ideal Client</h3>
              <Button onClick={() => navigate("/prospect/contacts")}>
                Select Sequence
              </Button>
            </Card>
          </Row>
        </Container>
      </Container>
    </Page>
  );
}
