import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import { HiOutlineCheck } from "react-icons/hi";
import useGet from "../hooks/useGet";
import Page from "../componentLibrary/Page";
import Row from "../componentLibrary/Row";
import Button from "../componentLibrary/Button";
import Workflow from "../components/Workflow";
import Card from "../componentLibrary/Card";

export default function TodaysActivities() {
  //   const [contactId, setContactId] = useState<string>();

  //   const { companyId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGet<
    {
      title: string;
      objective1: string;
      completed: boolean;
      _id: string;
    }[]
  >(`http://localhost:3009/steps`);

  //   useEffect(() => {
  //     console.log({ contactId, companyData });
  //     if (companyData && companyData.employees.length > 0) {
  //       setContactId(companyData.employees[0]._id);
  //     }
  //   }, [companyData]);

  if (isLoading) {
    return <div>Loading</div>;
  } else if (isError || !data) {
    return <div>Error</div>;
  }

  console.log(data);

  return (
    <Page>
      <>
        <h1 className="mb-1 p-2">Today's Activites</h1>
        <Row className="space-x-4 mb-2 h-64">
          <div className="px-3 py-4 w-full bg-gray-100 border-[1px] border-gray-200 rounded-md h-fit">
            <h3>{format(Date.now(), "MM/dd/yyyy")}</h3>
            <div className="flex flex-wrap">
              {data.map((step, i) => (
                <div
                  className="w-full w-full p-2"
                  key={step._id}
                  // className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2"
                >
                  <div className="bg-white border border-gray-300 rounded-md p-4">
                    <Row className="place-content-between">
                      <h3 className="capitalize pb-1">{step.title}</h3>
                      <button
                        className={`w-8 h-8 rounded-full flex justify-center items-center border border-blue-500 ${
                          step.completed
                            ? "text-white bg-blue-500"
                            : "text-blue-500"
                        }`}
                        onClick={() => navigate(`/step/${step._id}`)}
                      >
                        {step.completed ? <HiOutlineCheck /> : `${i + 1}`}
                      </button>
                    </Row>
                    <div className="pb-1">{step.objective1}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Row>
        <Row className="space-x-4 mb-2 h-64">
          {/* {contactId && <Workflow contactId={contactId} />} */}
        </Row>
      </>
    </Page>
  );
}
