import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGet from "../hooks/useGet";
import Select from "../componentLibrary/Select";
import Button from "../componentLibrary/Button";

export default function Workflow({
  contactName,
  contactId,
}: {
  contactName: string;
  contactId: string;
}) {
  const {
    data: workflowData,
    isLoading,
    isError,
  } = useGet<{
    title: string;
    steps: { title: string; _id: string; completed: boolean }[];
  }>(`http://localhost:3009/workflows/contact/${contactId}`);

  const [selectedTemplateI, setSelectedTemplateI] = useState<number>(0);

  const {
    data: templateData,
    isLoading: isLoadingTemplates,
    isError: isErrorTemplates,
  } = useGet<any[]>(`http://localhost:3009/templates`);

  const navigate = useNavigate();

  const handleSubmitWorkflow = async (event: any) => {
    // event.preventDefault();

    try {
      const response = await fetch("http://localhost:3009/workflows", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...templateData![selectedTemplateI],
          _id: null,
          contact: contactId,
          user: "660636e99dbcb0ef66c0de78",
        }),
      });

      if (response.ok) {
        // navigate("/company");
      } else {
        console.error("Failed to add lead:", response.statusText);
      }
    } catch (error: any) {
      console.error("Failed to add lead:", error.message);
    }
  };

  if (isLoading || isLoadingTemplates) {
    return <div>Loading</div>;
  } else if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="px-3 py-4 w-full bg-gray-100 border-[1px] border-gray-200 rounded-md h-fit">
      <h3>{contactName}</h3>
      {!workflowData ? (
        <>
          <div className="mb-2">
            Not enrolled - Choose a workflow to enroll {contactName}
          </div>
          <Select
            label="Workflow"
            options={templateData!.map((template, i) => ({
              value: `${i}`,
              label: template.title,
            }))}
            onChange={(event) => {
              setSelectedTemplateI(parseInt(event.target.value));
            }}
          />
          <Button
            className="w-40 mt-2 float-right"
            onClick={handleSubmitWorkflow}
          >
            Enroll
          </Button>
        </>
      ) : (
        <>
          <h4>Current Workflow - {workflowData.title}</h4>
          <div className="flex flex-wrap">
            {workflowData.steps.map((step, i) => (
              <div
                key={step._id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
              >
                <div className="bg-white border border-gray-300 rounded-md p-4">
                  <div className="capitalize pb-1">{step.title}</div>
                  <button
                    className={`w-8 h-8 rounded-full flex justify-center items-center border border-blue-500 ${
                      step.completed
                        ? "text-white bg-blue-500"
                        : "text-blue-500"
                    }`}
                    onClick={() => navigate(`/step/${step._id}`)}
                  >
                    {i + 1}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
