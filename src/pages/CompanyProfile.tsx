import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGet from "../hooks/useGet";
import Page from "../componentLibrary/Page";
import Row from "../componentLibrary/Row";
import Button from "../componentLibrary/Button";
import Workflow from "../components/Workflow";

export default function CompanyProfile() {
  const [contact, setContact] = useState<any>();

  const { companyId } = useParams();
  const navigate = useNavigate();

  const {
    data: companyData,
    isLoading,
    isError,
  } = useGet<{ name: string; email: string; url: string; employees: any[] }>(
    `http://localhost:3009/companies/${companyId}`
  );

  useEffect(() => {
    console.log({ contact, companyData });
    if (companyData && companyData.employees.length > 0) {
      setContact(companyData.employees[0]);
    }
  }, [companyData]);

  if (isLoading) {
    return <div>Loading</div>;
  } else if (isError || !companyData) {
    return <div>Error</div>;
  }

  return (
    <Page>
      <>
        <h2 className="mb-1 p-2">{companyData.name}</h2>
        <Row className="space-x-4 mb-2 h-64">
          <div className="px-3 py-4 w-fit bg-gray-100 border-[1px] border-gray-200 rounded-md">
            <h3>Company</h3>
            <img
              src="https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2023/09/how-much-does-a-cat-cost.jpeg.jpg"
              className="w-64 rounded-md"
            />
            <div>
              Primary Email: <span>{companyData.email}</span>
            </div>
            <div>
              Website:{" "}
              <a href={`https://${companyData.url}`} target="_blank">
                {companyData.url}
              </a>
            </div>
          </div>
          <div className="px-3 py-4 w-full bg-gray-100 border-[1px] border-gray-200 rounded-md">
            <h3>Contacts</h3>
            {companyData.employees.map((employee, i) => (
              <Row className="my-4 justify-between" key={i}>
                <img
                  src="https://cdn-icons-png.freepik.com/512/153/153629.png"
                  className="rounded-full w-10 bg-white p-1"
                />
                <div>
                  {employee.name}, <span>{employee.position}</span>
                </div>
                <Button
                  className="w-fit ml-4"
                  onClick={() => setContact(employee)}
                >
                  Current Sequence
                </Button>
              </Row>
            ))}
          </div>
        </Row>
        <Row className="space-x-4 mb-2 h-64">
          {contact && (
            <Workflow contactName={contact.name} contactId={contact._id} />
          )}
        </Row>
      </>
    </Page>
  );
}
