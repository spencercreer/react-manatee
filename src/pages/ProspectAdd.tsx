import React from "react";
import { useNavigate } from "react-router-dom";
import Page from "../componentLibrary/Page";
import Button from "../componentLibrary/Button";
import Input from "../componentLibrary/Input";

function ProspectAdd() {
  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const companyName = event.target.elements.companyName.value;

    try {
      const response = await fetch(
        "http://localhost:3009/users/660636e99dbcb0ef66c0de78/addCompany",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            companyName,
          }),
        }
      );

      if (response.ok) {
        navigate("/company");
      } else {
        console.error("Failed to add lead:", response.statusText);
      }
    } catch (error: any) {
      console.error("Failed to add lead:", error.message);
    }
  };

  return (
    <Page>
      <div className="flex mt-48 justify-center">
        <form
          className="bg-white p-8 shadow-md rounded-md"
          onSubmit={handleSubmit}
        >
          <Input
            className="mb-4"
            label="Company Name"
            type="companyName"
            id="companyName"
            name="companyName"
            required
          />
          {/* <Input
            className="mb-4"
            label="Contact"
            type="contact"
            id="contact"
            name="contact"
            placeholder="Optional"
          /> */}
          <Button type="submit">Add Lead</Button>
        </form>
      </div>
    </Page>
  );
}

export default ProspectAdd;
