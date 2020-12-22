import React,  {useContext, UserContext} from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';
import "./Profile.css";
import { auth } from "../config/firebase";
import { Link } from 'react-router-dom';

const Profile = () => {
    const user = useContext(UserContext);
    const { url, name, email, major, description } = user;
    return (
        <div>
            <MDBRow>
                <MDBCol className="profCard" style={{ maxWidth: "40rem" }}>
                    <MDBCard reverse>
                        <MDBCardImage cascade className="img" style={{ height: '20rem' }} src="https://atlantablackstar.com/wp-content/uploads/2016/08/malia-obama_ozv0ql.jpg" />
                        <MDBCardBody cascade className="text-center">
                            <MDBCardTitle>{name}</MDBCardTitle>
                            <h5 className="indigo-text"><strong>{major}</strong></h5>
                            <MDBCardText>{description}</MDBCardText>
                            <div className="text-center mt-4">
                                <Link to="/SignUp">
                                    <MDBBtn color="dark" className="mb-3" className="bg-dark" type="submit" onClick= {() => {auth.signOut()}}>
                                        Sign Out
                </MDBBtn></Link>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>

        </div>
    )
}

export default Profile;