import Navbar from "../components/Navbar";
import "..//App.css";
import AllCompanies from "../companies.json";
import React, { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useParams, Link } from "react-router-dom";

function CompanyPage() {
  const { companySlug } = useParams();

  const foundCompany = AllCompanies.find(
    (oneComp) => companySlug === oneComp.slug
  );

  const techStacks = [...foundCompany.techStack];

  return (
    <div>
      <Navbar />
      <h1>Company Profile</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around",
          padding: "5%",
        }}
      >
        <Card>
          <img src={foundCompany.logo} style={{ width: "10rem" }} />
        </Card>
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <h2>{foundCompany.name}</h2>
          <p>{foundCompany.description}</p>
        </div>
      </div>
      <Row style={{ justifyContent: "space-evenly" }}>
        {techStacks.map((stack) => {
          return (
            <Link
              key={stack.slug}
              to={`/tech/${stack.slug}?prev=${foundCompany.slug}`}
              style={{ width: "26%", marginBottom: "1rem" }}
            >
              <Card style={{ marginBottom: "1rem", height: "10rem" }}>
                <h2>{stack.name}</h2>
                <img src={stack.image} style={{ width: "3rem" }} />
              </Card>
            </Link>
          );
        })}

        <Card></Card>
      </Row>
    </div>
  );
}

export default CompanyPage;
