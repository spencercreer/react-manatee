import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Page from "../componentLibrary/Page";
import Button from "../componentLibrary/Button";
import Input from "../componentLibrary/Input";

function AddCustomer() {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState(""); // State to manage company name input

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3009/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: companyName,
        }),
      });

      if (response.ok) {
        setCompanyName("");
        alert("Customer added!");
      } else {
        console.error("Failed to add customer:", response.statusText);
      }
    } catch (error: any) {
      console.error("Failed to add customer:", error.message);
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
            type="text"
            id="companyName"
            name="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
          <Button type="submit">Add Customer</Button>
        </form>
      </div>
    </Page>
  );
}

export default AddCustomer;
