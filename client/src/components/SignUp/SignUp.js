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
import { auth, generateUserDocument } from "../config/firebase"; 

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [major, setMajor] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);

    const createUserWithEmailAndPasswordHandler = async (event, email, password, major, description) => {
        event.preventDefault();
        try{
          const {user} = await auth.createUserWithEmailAndPassword(email, password, major, description);
          generateUserDocument(user, {name});
        }
        catch(error){
          setError('Error Signing up with email and password');
        }
    
        setEmail("");
        setPassword("");
        setName("");
        setMajor("");
        setDescription("");
      };
    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "userEmail") {
            setEmail(value);
        } else if (name === "userPassword") {
            setPassword(value);
        } else if (name === "name") {
            setName(value);
        } else if (name === "userMajor") {
            setMajor(value);
        } else if (name === "userDescription"){
            setDescription(value)
        }
    };
    return (
        <div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard className="signUpCard">
                            <MDBCardBody>
                                <MDBCardHeader className="cardHeader" className="form-header bg-dark rounded" color="#263238" >
                                    <h3 className="my-3">
                                        <MDBIcon className="log" icon="lock" /> Sign Up:
                </h3>
                                </MDBCardHeader>
                                <label
                                    htmlFor="defaultFormEmailEx"
                                    className="grey-text font-weight-light" className="name"
                                >
                                    Name
              </label>
                                <input
                                    type="name"
                                    id="defaultFormEmailEx"
                                    name="name"
                                    value={name}
                                    onChange={(event) => onChangeHandler(event)}
                                    className="form-control"
                                />
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

<label
                                    htmlFor="defaultFormPasswordEx"
                                    className="grey-text font-weight-light"
                                >
                                    Major
              </label>
                                <input
                                    type="major"
                                    id="defaultFormEmailEx"
                                    name="userMajor"
                                    value={major}
                                    onChange={(event) => onChangeHandler(event)}
                                    className="form-control"
                                />
                                 <label
                                    htmlFor="defaultFormPasswordEx"
                                    className="grey-text font-weight-light"
                                >
                                    Description
              </label>
                                <input
                                    type="description"
                                    id="defaultFormEmailEx"
                                    name="userDescription"
                                    value={description}
                                    onChange={(event) => onChangeHandler(event)}
                                    className="form-control"
                                />

                                <div className="text-center mt-4">
                                  <Link to="/myprofile"><MDBBtn color="dark" className="mb-3" className="bg-dark" type="submit" onClick={(event) => { createUserWithEmailAndPasswordHandler(event, email, password) }}>
                                        Login
                </MDBBtn></Link> 
                                </div>

                                <MDBModalFooter>
                                    <div className="font-weight-light">
                                        <p>Already a member?{""}</p>
                                        <Link to="/profile" className="text-blue-500 hover:text-blue-600">
                                            Sign in here!
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

export default SignUp; 
