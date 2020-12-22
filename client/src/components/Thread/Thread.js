import React, { useEffect, useState}  from "react";
import { MDBCol} from 'mdbreact';
import API from '../../utils/API';
import "./Thread.css";
import { useParams } from "react-router";

function Thread({message}) {
    const [roommie, setRoommate] = useState({})
   const {id} = useParams()
   
//    useEffect(() => {
//     if (id) {
//       API.getRoommie(id).then(data => setRoommate(data.data)).catch(err => console.log(err));
//     }
// }, [])
    useEffect(() => {
        
        API.getRoommie(id)
        .then(data => setRoommate(data.data))
        .catch(err => console.log(err));
        

      }, [])

    // function handleChange(event) {
    //     const {key, style} = event.target;

    //     setRoommate(roommie => {
    //         return{
    //             ...roommie,
    //             [key]: style
    //         }
    //     })
    // }
    return (
        <div>
        {/* {roommie.map((roommie => ( */}

        <div className="thread">
            <div className="row">
            <MDBCol mb="1" md="1" className="mb-3 text-center">
            <img src={roommie.url} className="rounded-circle" alt={roommie.name} data-holder-rendered="true"/>
          </MDBCol></div>
          <div className="row">
          <div className= "convo_needs">
              <h3 className= "name">{roommie.name}</h3>
              <p className= "message">{message}</p>
          </div>
         </div>

        </div>

    {/* ) */}
    {/* )) */}
{/* } */}
  </div>
    )
}

export default Thread;