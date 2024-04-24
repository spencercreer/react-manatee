import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGet from "../hooks/useGet";
import Page from "../componentLibrary/Page";
import Row from "../componentLibrary/Row";
import Button from "../componentLibrary/Button";
import Workflow from "../components/Workflow";

export default function CompanyProfile() {
  //   const [contactId, setContactId] = useState<string>();

  const { stepId } = useParams();
  //   const navigate = useNavigate();

  const {
    data: stepData,
    isLoading,
    isError,
  } = useGet<{
    title: string;
    completed: boolean;
    objective1: string;
    objective2: string;
    howTo: string;
  }>(`http://localhost:3009/steps/${stepId}`);

  const handleMarkCompleted = async (event: any) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3009/steps/${stepId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: !stepData!.completed,
        }),
      });

      if (response.ok) {
        // navigate("/company");
      } else {
        console.error("Failed to update step:", response.statusText);
      }
    } catch (error: any) {
      console.error("Failed to update step:", error.message);
    }
  };

  if (isLoading) {
    return <div>Loading</div>;
  } else if (isError || !stepData) {
    return <div>Error</div>;
  }

  console.log(stepData);

  return (
    <Page>
      <>
        {/* <h2 className="mb-1 p-2">{companyData.name}</h2> */}
        <Row className="space-x-4 mb-2 h-fit">
          <div className="px-3 py-4 w-full bg-gray-100 border-[1px] border-gray-200 rounded-md">
            <h2 className="capitalize mb-2">{stepData.title}</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 bg-white border border-gray-300 rounded-md p-4">
                <h3>Key Elements</h3>
                <div>
                  Object 1: <span>{stepData.objective1}</span>
                </div>
                <div>
                  Object 2: <span>{stepData.objective2}</span>
                </div>
              </div>
              <div className="w-1/2 bg-white border border-gray-300 rounded-md p-4">
                <h3>Key Insight</h3>
              </div>
            </div>
            <div className="w-40 mt-8 float-right">
              <Button onClick={handleMarkCompleted}>Mark Complete</Button>
            </div>
          </div>
        </Row>
      </>
    </Page>
  );
}
