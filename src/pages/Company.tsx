import React from "react";
import Page from "../componentLibrary/Page";
import Container from "../componentLibrary/Container";
import Navbar from "../componentLibrary/Navbar";

const company = {
  name: "Kelly Spicers",
  email: "kellyspicers@fakemail.com",
  phone: "555-555-1234",
  address: {
    street: "301 Kelly Drive",
    state: "CA",
    city: "Anaheim",
    zip: "92566",
  },
  employees: [
    {
      name: "Mike T. Lee",
      title: "Logistics Manager",
      sequence: {
        title: "Ideal Client",
        steps: [
          {
            title: "Email",
            completed: true,
          },
          {
            title: "Email",
            completed: true,
          },
          {
            title: "Email",
            completed: false,
          },
          {
            title: "Email",
            completed: false,
          },
          {
            title: "Email",
            completed: false,
          },
          {
            title: "Email",
            completed: false,
          },
          {
            title: "Email",
            completed: false,
          },
          {
            title: "Email",
            completed: false,
          },
          {
            title: "Email",
            completed: false,
          },
          {
            title: "Email",
            completed: false,
          },
          {
            title: "Email",
            completed: false,
          },
          {
            title: "Email",
            completed: false,
          },
          {
            title: "Email",
            completed: false,
          },
          {
            title: "Email",
            completed: false,
          },
          {
            title: "Email",
            completed: false,
          },
          {
            title: "Email",
            completed: false,
          },
        ],
      },
    },
    {
      name: "Todd Smith",
      title: "CEO",
      sequence: {
        title: "Nurturing",
        steps: [
          {
            title: "Email",
            completed: false,
          },
          {
            title: "Email",
            completed: false,
          },
          {
            title: "Email",
            completed: false,
          },
          {
            title: "Email",
            completed: false,
          },
        ],
      },
    },
  ],
};

function Company() {
  return (
    <>
      <Navbar />
      <div className="rounded-md p-2 border-2 grid grid-cols-4 gap-4">
        <h1 className="py-2 col-span-4">{company.name}</h1>
        <div className="p-2 rounded-md border-2">
          <img
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
            className="w-32 rounded-md"
          />
          <div>{company.email}</div>
          <div>{company.phone}</div>
          <div>
            {company.address.street}, {company.address.city},{" "}
            {company.address.state} {company.address.zip}
          </div>
        </div>
        <div className="p-2 col-span-2 rounded-md border-2">
          <h2>Contacts</h2>
          {company.employees.map((employee) => (
            <div className="mb-2 p-4 bg-blue-100 rounded-md">
              <div>
                {employee.name} - {employee.title}
              </div>
              <div>Sequence: {employee.sequence.title}</div>
            </div>
          ))}
        </div>
        <div className="p-2 rounded-md border-2">
          <h2>Customer Journey</h2>
        </div>
        <div className="p-2 col-span-4 rounded-md border-2">
          <div className="grid grid-cols-12 gap-4">
            {company.employees[0].sequence.steps.map((step, i) => (
              <div
                className={`${
                  step.completed ? "bg-green-100" : "bg-blue-100"
                } p-4`}
              >
                {i + 1} {step.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Company;
