import Navbar from "../components/Navbar";
import "..//App.css";
import AllCompanies from "../companies.json";
import AllTechnologies from "../technologies.json";
import React, { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useParams, Link, useSearchParams } from "react-router-dom";

function TechnologyPage() {
  const { techOne } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const Prev = searchParams.get("prev");
  console.log(Prev);

  const foundOne = AllTechnologies.find((oneTech) => techOne === oneTech.slug);

  return (
    <div>
      <Navbar />
      <Link
        key={Prev}
        to={`/company/${Prev}`}
        style={{ width: "26%", marginBottom: "1rem" }}
      >
        <button>Back</button>
      </Link>
      <h1>Technology Details</h1>
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
          <img src={foundOne.image} style={{ width: "10rem" }} />
        </Card>
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <h2>{foundOne.name}</h2>
          <p>{foundOne.description}</p>
        </div>
      </div>
    </div>
  );
}

export default TechnologyPage;
