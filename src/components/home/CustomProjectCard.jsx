import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const CustomProjectCard = ({ value }) => {
  const {
    title,
    description,
    started_at,
    ended_at,
    technologies,
    project_urls,
    subtitle
  } = value;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5" className="pb-2">
            {title || <Skeleton />}{" "}
          </Card.Title>
          { subtitle ? (<Card.Text className="">
            {subtitle || <Skeleton />}{" "}
          </Card.Text>) : ""}
          <Card.Text>
            {!description ? "" : description || <Skeleton count={3} />}{" "}
          </Card.Text>
          <hr />
          <Technologies technologies={technologies} />
          {project_urls ? <CardButtons project_urls={project_urls} /> : ""}
          {value ? (
            <CardFooter started_at={started_at} ended_at={ended_at} />
          ) : (
            <Skeleton />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ project_urls }) => {
  return (
    <div className="d-grid gap-2 d-md-block py-2">
      {project_urls.length > 0
        ? project_urls.map((url) => (
            <a
              href={`${url.url}`}
              className="btn btn-outline-secondary mx-2"
              target="_blank"
            >
              <i className="fab fa-github" /> {url.label}
            </a>
          ))
        : ""}
    </div>
  );
};

const Technologies = ({ technologies }) => {
  return (
    <div className="flex pb-2">
      Technologies:{" "}
      {technologies.length
        ? technologies.map((tech) => (
            <a key={tech} className="card-link" rel="noopener noreferrer">
              <span className="badge bg-light text-dark">{tech}</span>
            </a>
          ))
        : "code yet to be deployed."}
    </div>
  );
};

const CardFooter = ({ started_at, ended_at }) => {
  return (
    <p className="card-text">
      <small className="text-muted">{started_at} - </small>
      <small className="text-muted">{ended_at}</small>
    </p>
  );
};

export default CustomProjectCard;
