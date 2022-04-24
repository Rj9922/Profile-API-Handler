import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import {
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhone,
  FaMailBulk,
  FaAccessibleIcon,
  FaMicroblog,
  FaMixer
} from "react-icons/fa";

export default function CardDetails({ details }) {
  return (
    <Card className="rounded" style={{ height: "430px", width: "400px" }}>
      <CardBody className="text-center">
        <img
          height="160px"
          width="160px"
          className="rounded-circle img-thumbnail borfder-danger"
          alt="avtar"
          src={details.picture?.large}
        />
        <CardTitle className="text-primary">
          <h3 className="mt-2">
            <span className="px-1">{details.name?.title}</span>
            <span className="px-1">{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h3>
        </CardTitle>
        <CardText className="py-4">
          <span class="badge rounded-pill bg-dark px-4 py-3 mt-2">
            <span>
              <FaMapMarkedAlt />
            </span>
            <span className="px-1">{details.location?.city}</span>
          </span>
          <span class="badge rounded-pill bg-primary px-4 py-3 mx-1 mt-2">
            <span>
              <FaPhone />
            </span>
            <span className="px-1">{details.phone}</span>
          </span>
          <span class="badge rounded-pill bg-warning text-dark px-4 py-3 mx-1 mt-2">
            <span>
              <FaMailBulk />
            </span>
            <span className="px-1">{details.email}</span>
          </span>
          <span class="badge rounded-pill bg-danger text-light px-4 py-3 mx-1 mt-2">
            <span>
              <FaAccessibleIcon />
            </span>
            <span className="px-1">{details.dob?.age}</span>
          </span>
          <span class="badge rounded-pill bg-primary text-light px-4 py-3 mx-1 mt-2">
            <span>
              <FaMicroblog />
            </span>
            <span className="px-1">{details.location?.state}</span>
          </span>
          <span class="badge rounded-pill bg-success text-light px-4 py-3 mx-1 mt-2">
            <span>
              <FaMixer />
            </span>
            <span className="px-1">{details.login?.uuid}</span>
          </span>
        </CardText>
      </CardBody>
    </Card>
  );
}
