import React from 'react';
import { MDBIcon, MDBBtn} from 'mdbreact';
import "./Header.css"
import { Link, useHistory } from 'react-router-dom';


function Header () {
    // const hist = useHistory();
    return (
        <div className= "header">
            {/* {returnHist ? (
                <MDBBtn onClick= {() => hist.replaceState(returnHist)} className= "icons" color= "white" idname= "gradIcon"><MDBIcon icon="graduation-cap" className= "logo" /></MDBBtn>
            ):(
                <MDBBtn className= "icons" color= "white" idname= "gradIcon"><MDBIcon icon="graduation-cap" className= "logo" /></MDBBtn>
            )} */}
            <Link to= "/">
            <MDBBtn className= "icons" color= "white" idname= "gradIcon"><MDBIcon icon="graduation-cap" className= "logo" /></MDBBtn>
            </Link>
            <MDBBtn  color= "white"  className= "icons"><MDBIcon far icon="user" /></MDBBtn>
            <Link to= "/message">
            <MDBBtn  color= "white" className= "icons"><MDBIcon far icon="comments" /></MDBBtn>
            </Link>
        </div>
    );
}

export default Header; 