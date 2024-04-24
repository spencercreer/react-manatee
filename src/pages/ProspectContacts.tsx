import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import prospects from "../backend/companies.json";
import Page from "../componentLibrary/Page";
import Container from "../componentLibrary/Container";
import Row from "../componentLibrary/Row";
import Card from "../componentLibrary/Card";
import Button from "../componentLibrary/Button";

export default function ProspectContacts() {
  const navigate = useNavigate();
  return (
    <Page>
      <>
        <h2 className="mb-1 p-2">Kelly Spicers</h2>
        <h1 className="mb-1 p-2">Company Contacts</h1>
        <Container>
          <Row className="space-x-4">
            {prospects[0].contacts.map((contact, i) => (
              <Card
                id={i}
                key={`contact_${contact.title}_${i}`}
                title={contact.title}
                body={
                  <>
                    <div className="rounded-md h-44 bg-white mb-2 p-2">
                      <h3>
                        {contact.firstName} {contact.lastName}
                      </h3>
                    </div>
                    <Row className="mb-1 space-x-2">
                      <FaLinkedin size={36} />
                      <FaFacebookSquare size={36} />
                    </Row>
                  </>
                }
                footer={<Button>Add Contact</Button>}
              />
            ))}
          </Row>
        </Container>
        <Row className="mt-1 justify-end space-x-2">
          <Button
            className="w-20"
            onClick={() => navigate("/prospect/campaign")}
          >
            Back
          </Button>
          <Button
            className="w-20"
            onClick={() => navigate("/prospect/sequence")}
          >
            Next
          </Button>
        </Row>
      </>
    </Page>
  );
}
