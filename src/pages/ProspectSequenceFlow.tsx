import React from "react";
import { useNavigate } from "react-router-dom";
import Page from "../componentLibrary/Page";
import Container from "../componentLibrary/Container";
import Row from "../componentLibrary/Row";
import Card from "../componentLibrary/Card";
import Button from "../componentLibrary/Button";

export default function ProspectSequenceFlow() {
  const navigate = useNavigate();
  return (
    <Page>
      <Container>sequence flow</Container>
    </Page>
  );
}
