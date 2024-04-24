import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils/formatUtils";
// import prospects from "../backend/companies.json";
import Page from "../componentLibrary/Page";
import Container from "../componentLibrary/Container";
import Row from "../componentLibrary/Row";
import Button from "../componentLibrary/Button";

export default function Prospects() {
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3009/users/660636e99dbcb0ef66c0de78", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data.companies);
      });
  }, []);

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
            <h3 className="w-1/6">Profile</h3>
          </Row>
          {companies.map((company: any, i) => (
            <Row key={`prospect_${company.name}_${i}`} className="mb-1 px-2">
              <p className="w-2/6">{company.name}</p>
              <p className="w-1/4">{formatDate(company.createdAt)}</p>
              <p className="w-1/4">{company.url}</p>
              <div className="w-1/6">
                <Button onClick={() => navigate("/company/" + company._id)}>
                  Profile
                </Button>
              </div>
            </Row>
          ))}
        </Container>
      </Container>
    </Page>
  );
}
