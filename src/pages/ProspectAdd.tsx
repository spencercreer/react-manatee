import React from "react";
import { useNavigate } from "react-router-dom";
import Page from "../components/Page";
import Button from "../components/Button";
import Input from "../components/Input";

function ProspectAdd() {
  const navigate = useNavigate();
  return (
    <Page>
      <div className="flex mt-48 justify-center">
        <form className="bg-white p-8 shadow-md rounded-md">
          <Input
            className="mb-4"
            label="Company Name"
            type="companyName"
            id="companyName"
            name="companyName"
            required
          />
          <Input
            className="mb-4"
            label="Contact"
            type="contact"
            id="contact"
            name="contact"
            placeholder="Optional"
          />
          <Button type="submit" onClick={() => navigate("/prospect")}>
            Add Lead
          </Button>
        </form>
      </div>
    </Page>
  );
}

export default ProspectAdd;
