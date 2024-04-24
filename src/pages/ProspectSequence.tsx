import React from "react";
import { useNavigate } from "react-router-dom";
import Page from "../componentLibrary/Page";
import Container from "../componentLibrary/Container";
import Row from "../componentLibrary/Row";
import Card from "../componentLibrary/Card";
import Button from "../componentLibrary/Button";

export default function ProspectSequence() {
  const navigate = useNavigate();
  return (
    <Page>
      <>
        <h2 className="mb-1 p-2">Kelly Spicers</h2>
        <h1 className="mb-1 p-2">Campaign Sequence</h1>
        <h3 className="mb-1 p-2">Ideal Client</h3>
        <Container>
          <Row className="space-x-4">
            <Card
              id={0}
              selected={true}
              title="Text Only"
              body={
                <div className="rounded-md h-fit bg-white mb-2 p-2">
                  <div className="rounded-md h-12 bg-blue-100 mb-2 p-2">
                    Total Emails - 6
                  </div>
                  <div className="rounded-md h-12 bg-blue-100 mb-2 p-2">
                    Total Days - 12
                  </div>
                </div>
              }
              footer={<Button>Select Sequence</Button>}
            />
            <Card
              id={1}
              title="Video, Images & Text"
              body={
                <div className="rounded-md h-fit bg-white mb-2 p-2">
                  <div className="rounded-md h-12 bg-blue-100 mb-2 p-2">
                    Total Emails - 6
                  </div>
                  <div className="rounded-md h-12 bg-blue-100 mb-2 p-2">
                    Total Videos - 6
                  </div>
                  <div className="rounded-md h-12 bg-blue-100 mb-2 p-2">
                    Total Days - 12
                  </div>
                </div>
              }
              footer={<Button>Select Sequence</Button>}
            />
            <Card
              id={2}
              title="Video, Images & Text"
              body={
                <div className="rounded-md h-fit bg-white mb-2 p-2">
                  <div className="rounded-md h-12 bg-blue-100 mb-2 p-2">
                    Total Emails - 6
                  </div>
                  <div className="rounded-md h-12 bg-blue-100 mb-2 p-2">
                    Total Videos - 6
                  </div>
                  <div className="rounded-md h-12 bg-blue-100 mb-2 p-2">
                    Total Images - 6
                  </div>
                  <div className="rounded-md h-12 bg-blue-100 mb-2 p-2">
                    Total Days - 24
                  </div>
                </div>
              }
              footer={<Button>Select Sequence</Button>}
            />
          </Row>
        </Container>
        <Row className="mt-1 justify-end space-x-2">
          <Button
            className="w-20"
            onClick={() => navigate("/prospect/contacts")}
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
