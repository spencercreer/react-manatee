import React from "react";
import Page from "../componentLibrary/Page";
import Container from "../componentLibrary/Container";

function Dashboard() {
  return (
    <Page>
      <>
        <h1>Welcome to Intention</h1>
        <h2>Dashboard</h2>
        <div className="mt-4">What would you like to do?</div>
        {/* <a href="/company/add">Add company</a> */}
        <a href="/customer/add" className="hover:text-blue-500 hover:underline">
          Add Customer
        </a>
      </>
    </Page>
  );
}

export default Dashboard;
