import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGet from "../hooks/useGet";
import Page from "../componentLibrary/Page";
import Row from "../componentLibrary/Row";
import Card from "../componentLibrary/Card";
import Button from "../componentLibrary/Button";

export default function ProspectCampaign() {
  const { companyId } = useParams();
  const navigate = useNavigate();

  const {
    data: companyData,
    isLoading,
    isError,
  } = useGet<{ name: string }>(`http://localhost:3009/companies/${companyId}`);

  if (isLoading) {
    return <div>Loading</div>;
  } else if (isError || !companyData) {
    return <div>Error</div>;
  }

  return (
    <Page>
      <>
        <h2 className="mb-1 p-2">{companyData.name}</h2>
        <h1 className="mb-1 p-2">Title and Campaign</h1>
        <h3 className="mb-1 p-2">Who will you contact?</h3>
        <Row className="space-x-4 mb-2">
          {/* {prospects[0].contacts.map((contact, i) => (
            <Button key={`contact_${contact.title}_${i}`} className="w-44">
              {contact.title}
            </Button>
          ))} */}
        </Row>
        <h3 className="mb-1 p-2">What campaign will they be enrolled in?</h3>
        <Row className="space-x-4 mb-2 h-64">
          <Card
            id={0}
            title="Ideal Client"
            body={<div className="rounded-md h-44 bg-white"></div>}
          />
          <Card
            id={1}
            title="Raving Fan"
            body={<div className="rounded-md h-44 bg-white"></div>}
          />
          <Card
            id={2}
            title="Trade Show"
            body={<div className="rounded-md h-44 bg-white"></div>}
          />
        </Row>
        <Row className="space-x-4 mb-2 h-64">
          <Card
            id={3}
            title="Transformative Journey"
            body={<div className="rounded-md h-44 bg-white"></div>}
          />
          <Card
            id={4}
            title="Client Referral"
            body={<div className="rounded-md h-44 bg-white"></div>}
          />
          <Card
            id={5}
            title="Current Customer Retention"
            body={<div className="rounded-md h-44 bg-white"></div>}
          />
        </Row>
        <Row className="justify-end space-x-2">
          <Button className="w-20" onClick={() => navigate("/prospect")}>
            Back
          </Button>
          <Button
            className="w-20"
            onClick={() => navigate("/prospect/contacts")}
          >
            Next
          </Button>
        </Row>
      </>
    </Page>
  );
}
