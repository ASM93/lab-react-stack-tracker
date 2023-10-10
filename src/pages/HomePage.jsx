import Navbar from "../components/Navbar";
import "..//App.css";
import "..//index.css";
import AllCompanies from "../companies.json";
import React, { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import { Link } from "react-router-dom";

function HomePage() {
  const [companies, setCompanies] = useState([AllCompanies]);
  let Companies = [...companies];

  return (
    <>
      <Navbar />
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {AllCompanies.map((Company) => {
          return (
            <Link
              key={Company.id}
              to={`/company/${Company.slug}`}
              style={{ width: "26%", marginBottom: "1rem" }}
            >
              <Card>
                <h2>{Company.name}</h2>
                <img src={Company.logo} style={{ width: "3rem" }} />
              </Card>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
