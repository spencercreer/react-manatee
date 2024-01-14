import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import prospects from "../backend/companies.json";
import Page from "../components/Page";
import Container from "../components/Container";
import Row from "../components/Row";
import Card from "../components/Card";
import Button from "../components/Button";

export default function ProspectContacts() {
  const navigate = useNavigate();
  return (
    <Page>
      <Container>
        <Row className="mb-1 p-2">
          <h2>Kelly Spicers</h2>
        </Row>
        <Row className="mb-1 p-2">
          <h1>Company Contacts</h1>
        </Row>
        <Container>
          <Row className="space-x-4">
            {prospects[0].contacts.map((contact, i) => (
              <Card key={`contact_${contact.title}_${i}`}>
                <h3>{contact.title}</h3>
                <div className="rounded-md h-44 bg-white mb-2 p-2">
                  <h3>
                    {contact.firstName} {contact.lastName}
                  </h3>
                </div>
                <Row className="mb-1 space-x-2">
                  <FaLinkedin size={36} />
                  <FaFacebookSquare size={36} />
                </Row>
                <Button>Add Contact</Button>
              </Card>
            ))}
          </Row>
        </Container>
        <Row className="justify-end">
          <Button
            className="w-20"
            onClick={() => navigate("/prospect/sequence")}
          >
            Next
          </Button>
        </Row>
      </Container>
    </Page>
  );
}
