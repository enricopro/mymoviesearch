import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCol
} from "mdbreact";

const CardExample = ({ result, openPopup }) => {
  return (
    <MDBCol onClick={() => openPopup(result.imdbID)}>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid posters" src={result.Poster} waves />
        <MDBCardBody>
          <MDBCardTitle className="titles">{result.Title}</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default CardExample;
