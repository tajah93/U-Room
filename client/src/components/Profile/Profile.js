import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import "./Profile.css";

const Profile = () => {
    return (
        <div>
    <MDBRow>
      <MDBCol className= "profCard" style={{ maxWidth: "40rem" }}>
        <MDBCard reverse>
          <MDBCardImage cascade className="img" style={{ height: '20rem' }} src="https://atlantablackstar.com/wp-content/uploads/2016/08/malia-obama_ozv0ql.jpg" />
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle>Malia O.</MDBCardTitle>
            <h5 className="indigo-text"><strong>Sociology</strong></h5>
            <MDBCardText>Hey! I'm looking for a roommate who's trustworthy and respects the privacy of others. Also, you must be cool with Secret Service agents monitoring you when I'm around. &#128579;</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>

        </div>
    )
}

export default Profile;