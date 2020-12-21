import React from "react";
import { MDBCol} from 'mdbreact';
import "./Thread.css";

function Thread({name, message, url}) {
    return (
        <div className="thread">
            <MDBCol mb="1" md="1" className="mb-3 text-center">
            <img src={url} className="rounded-circle" alt={name} data-holder-rendered="true"/>
          </MDBCol>
          <div className= "convo_needs">
              <h3 className= "name">{name}</h3>
              <p className= "message">{message}</p>
          </div>

        </div>

    )
}

export default Thread;