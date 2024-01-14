import React from "react";
import { useNavigate } from "react-router-dom";
import prospects from "../backend/companies.json";
import Page from "../components/Page";
import Container from "../components/Container";
import Row from "../components/Row";
import Card from "../components/Card";
import Button from "../components/Button";

export default function ProspectCampaign() {
  const navigate = useNavigate();
  return (
    <Page>
      <Container>
        <Row className="mb-1 p-2">
          <h2>Kelly Spicers</h2>
        </Row>
        <Row className="mb-1 p-2">
          <h1>Title and Campaign</h1>
        </Row>
        <Row>
          <h3>Who will you contact?</h3>
        </Row>
        <Row className="space-x-4 mb-2">
          {prospects[0].contacts.map((contact, i) => (
            <Button key={`contact_${contact.title}_${i}`} className="w-44">
              {contact.title}
            </Button>
          ))}
        </Row>
        <Row>
          <h3>Whate campaign will they be enrolled in?</h3>
        </Row>
        <Row className="space-x-4 mb-2">
          <Card>
            <h3>Ideal Client</h3>
            <div className="rounded-md h-44 bg-white"></div>
          </Card>
          <Card>
            <h3>Raving Fan</h3>
            <div className="rounded-md h-44 bg-white"></div>
          </Card>
          <Card>
            <h3>Trade Show</h3>
            <div className="rounded-md h-44 bg-white"></div>
          </Card>
        </Row>
        <Row className="space-x-4 mb-2">
          <Card>
            <h3>Transformative Journey</h3>
            <div className="rounded-md h-44 bg-white"></div>
          </Card>
          <Card>
            <h3>Client Referral</h3>
            <div className="rounded-md h-44 bg-white"></div>
          </Card>
          <Card>
            <h3>Current Customer Retention</h3>
            <div className="rounded-md h-44 bg-white"></div>
          </Card>
        </Row>
        <Row className="justify-end">
          <Button
            className="w-20"
            onClick={() => navigate("/prospect/contacts")}
          >
            Next
          </Button>
        </Row>
      </Container>
    </Page>
  );
}
