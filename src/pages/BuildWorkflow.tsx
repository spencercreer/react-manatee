import React, { useState } from "react";
import Input from "../componentLibrary/Input";
import Page from "../componentLibrary/Page";
import Select from "../componentLibrary/Select";
import Button from "../componentLibrary/Button";
import DatePicker from "../componentLibrary/DatePicker";

export default function CompanyProfile() {
  const [workflowTemplate, setWorkflowTemplate] = useState<any>({
    title: "",
    steps: [],
  });

  const handleAddTemplate = async () => {
    try {
      const response = await fetch("http://localhost:3009/templates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: workflowTemplate.title,
          steps: workflowTemplate.steps,
        }),
      });

      if (response.ok) {
        // Handle successful response
        console.log("Template added successfully.");
        // Redirect or any other logic after successful addition
      } else {
        console.error("Failed to add template:", response.statusText);
      }
    } catch (error: any) {
      console.error("Failed to add template:", error.message);
    }
  };

  // Function to add a step to the workflow template
  const addStep = () => {
    console.log(workflowTemplate);
    const newStep = {
      type: "email",
      objective1: "",
      objective2: "",
      dueDate: "",
    };

    setWorkflowTemplate((prevTemplate: any) => ({
      ...prevTemplate,
      steps: [...prevTemplate.steps, newStep],
    }));
  };

  const handleStepTitleChange = (value: string, index: number) => {
    setWorkflowTemplate((prevTemplate: any) => {
      const updatedSteps = [...prevTemplate.steps];
      updatedSteps[index].title = value;
      return { ...prevTemplate, steps: updatedSteps };
    });
  };

  // Function to handle changes in objective 1 input
  const handleObjective1Change = (value: string, index: number) => {
    setWorkflowTemplate((prevTemplate: any) => {
      const updatedSteps = [...prevTemplate.steps];
      updatedSteps[index].objective1 = value;
      return { ...prevTemplate, steps: updatedSteps };
    });
  };

  // Function to handle changes in objective 2 input
  const handleObjective2Change = (value: string, index: number) => {
    setWorkflowTemplate((prevTemplate: any) => {
      const updatedSteps = [...prevTemplate.steps];
      updatedSteps[index].objective2 = value;
      return { ...prevTemplate, steps: updatedSteps };
    });
  };

  const handleStepTypeChange = (value: string, index: number) => {
    setWorkflowTemplate((prevTemplate: any) => {
      const updatedSteps = [...prevTemplate.steps];
      updatedSteps[index].type = value;
      return { ...prevTemplate, steps: updatedSteps };
    });
  };

  const handleDueDateChange = (value: string, index: number) => {
    setWorkflowTemplate((prevTemplate: any) => {
      const updatedSteps = [...prevTemplate.steps];
      updatedSteps[index].dueDate = value;
      return { ...prevTemplate, steps: updatedSteps };
    });
  };

  return (
    <Page>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="w-1/3">
          <>
            <h2>Build Workflow Template</h2>
            <Input
              label="Template Title"
              className="pb-2"
              onChange={(event) => {
                setWorkflowTemplate((prevTemplate: any) => ({
                  ...prevTemplate,
                  title: event.target.value,
                }));
              }}
            />
            <Button className="pb-2" onClick={addStep}>
              Add Step
            </Button>
            {workflowTemplate.steps.map((step: any, i: number) => (
              <div key={i}>
                <h3>Step {i + 1}</h3>
                <Input
                  className="pb-2"
                  label="Step Title"
                  onChange={(event) =>
                    handleStepTitleChange(event.target.value, i)
                  }
                />
                <Select
                  label="Step Type"
                  className="pb-2"
                  options={[
                    { value: "email", label: "Email" },
                    { value: "linkedin", label: "LinkedIn" },
                    { value: "call", label: "Call" },
                    { value: "mail", label: "Mail" },
                  ]}
                  onChange={(event) =>
                    handleStepTypeChange(event.target.value, i)
                  }
                />
                <Input
                  className="pb-2"
                  label="Objective 1"
                  onChange={(event) =>
                    handleObjective1Change(event.target.value, i)
                  }
                />
                <Input
                  className="pb-2"
                  label="Objective 2"
                  onChange={(event) =>
                    handleObjective2Change(event.target.value, i)
                  }
                />
                <DatePicker
                  label="Due Date"
                  onChange={(event) =>
                    handleDueDateChange(event.target.value, i)
                  }
                  className="pb-2"
                />
              </div>
            ))}
            <Button onClick={handleAddTemplate}>Submit</Button>
          </>
        </div>
      </div>
    </Page>
  );
}
