import React from 'react';
import { MDBIcon, MDBBtn} from 'mdbreact';
import "./Header.css"

function Header () {
    return (
        <div className= "header">
            <MDBBtn floating size="lg" gradient="blue" className= "icons"><MDBIcon icon="graduation-cap" className= "logo" /></MDBBtn>
            <MDBBtn floating size="lg" gradient="blue" className= "icons"><MDBIcon far icon="user" /></MDBBtn>
            <MDBBtn floating size="lg" gradient="blue" className= "icons"><MDBIcon far icon="comments" /></MDBBtn>
           
        </div>
    );
}

export default Header; 