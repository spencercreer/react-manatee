import React from "react";
import { useNavigate } from "react-router-dom";
import prospects from "../backend/companies.json";
import Page from "../components/Page";
import Container from "../components/Container";
import Row from "../components/Row";
import Button from "../components/Button";

export default function Prospects() {
  const navigate = useNavigate();

  return (
    <Page>
      <Container>
        <Row className="mb-1 p-2">
          <h1>Prospects</h1>
        </Row>
        <Container>
          <Row className="mb-1 p-2 rounded bg-gray-100">
            <h3 className="w-2/6">Company Name</h3>
            <h3 className="w-1/4">Date Added</h3>
            <h3 className="w-1/4">Suggested Url</h3>
            <h3 className="w-1/6">Enroll Prospect</h3>
          </Row>
          {prospects.map((prospect: any, i) => (
            <Row key={`prospect_${prospect.name}_${i}`} className="mb-1 px-2">
              <p className="w-2/6">{prospect.name}</p>
              <p className="w-1/4">{prospect.createdAt}</p>
              <p className="w-1/4">{prospect.url}</p>
              <div className="w-1/6">
                <Button onClick={() => navigate("/prospect/campaign")}>
                  Enroll
                </Button>
              </div>
            </Row>
          ))}
        </Container>
      </Container>
    </Page>
  );
}
