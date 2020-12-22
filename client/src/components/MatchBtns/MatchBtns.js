import React from 'react';
import { MDBIcon, MDBBtn} from 'mdbreact';
import "./MatchBtns.css";




function MatchBtns() {
    return(

    <div className= "MatchBtns">

        {/* <MDBBtn  color= "rgba(0, 0, 0, 0.822)"  className= "icons"><MDBIcon icon="times" /></MDBBtn>
        <MDBBtn  color= "rgba(0, 0, 0, 0.822)"  className= "icons"><MDBIcon icon="redo" /></MDBBtn>  */}
        <MDBBtn  color= "rgba(0, 0, 0, 0.822)"  className= "icons"><MDBIcon far icon="heart" /></MDBBtn>

    </div>

    );
}

export default MatchBtns; 