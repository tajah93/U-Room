import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn
} from "mdbreact";
import "./SignIn.css";
import { auth } from "../config/firebase"; 


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
          setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
      };

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === "userEmail") {
            setEmail(value);
        }
        else if (name === "userPassword") {
            setPassword(value);
        }
    };

    return (
        <div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard className="signInCard">
                            <MDBCardBody>
                                <MDBCardHeader className="cardHeader" className="form-header bg-dark rounded" color="#263238" >
                                    <h3 className="my-3">
                                        <MDBIcon className="log" icon="lock" /> Login:
                </h3>
                                </MDBCardHeader>
                                <label
                                    htmlFor="defaultFormEmailEx"
                                    className="grey-text font-weight-light" className="userEmail"
                                >
                                    Email
              </label>
                                <input
                                    type="email"
                                    id="defaultFormEmailEx"
                                    name="userEmail"
                                    value={email}
                                    onChange={(event) => onChangeHandler(event)}
                                    className="form-control"
                                />

                                <label
                                    htmlFor="defaultFormPasswordEx"
                                    className="grey-text font-weight-light"
                                >
                                    Password
              </label>
                                <input
                                    type="password"
                                    id="defaultFormPasswordEx"
                                    name="userPassword"
                                    value={password}
                                    onChange={(event) => onChangeHandler(event)}
                                    className="form-control"
                                />

                                <div className="text-center mt-4">
                                    <Link to="/myprofile">
                                    <MDBBtn color="dark" className="mb-3" className="bg-dark" type="submit" onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}>
                                        Login
                </MDBBtn></Link>
                                </div>

                                <MDBModalFooter>
                                    <div className="font-weight-light">
                                        <p>Not a member?</p>
                                        <Link to="/SignUp" className="text-blue-500 hover:text-blue-600">
                                            Sign up here
          </Link>

                                    </div>
                                </MDBModalFooter>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>


        </div>
    )
}

export default SignIn;