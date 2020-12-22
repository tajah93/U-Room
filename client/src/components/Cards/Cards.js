import { Mongoose, MongooseDocument } from 'mongoose';
import React, { useEffect, useState}  from 'react';
import TinderCard from 'react-tinder-card'; 
import API from '../../utils/API';
import './Cards.css';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { Link, useHistory } from 'react-router-dom';


function Cards() {
    const [roommie, setRoommate] = useState([])
   
    useEffect(() => {
        API.getRoommies()
        .then(data => 
            {
                console.log(data)
                setRoommate(data.data)
            }
        )

      }, [])

    function handleChange(event) {
        const {key, style} = event.target;

        setRoommate(roommie => {
            return{
                ...roommie,
                [key]: style
            }
        })
    }
    const onSwipe= function onSwipe(direction) {
        console.log("You swiped" + direction)
 }

   
        
console.log(roommie)
    return (
        <div>
            <h1 className= 'title'>U-Room</h1>

            <div className= 'cardContainer'>

            
            {roommie.map((roommie => (
                

                <MDBRow>
                <MDBCol className="profCard" style={{ maxWidth: "40rem" }}>
                <TinderCard className= 'rummage'>
                    <MDBCard reverse  onChange= {handleChange} preventSwipe= {['up', 'down']}  key= {roommie.name}>
                        <MDBCardImage cascade className="img" style={{ height: '20rem' }} className= 'roommieCard' onChange= {handleChange}  src={roommie.url}/>
                        <MDBCardBody cascade className="text-center">
                            <MDBCardTitle>{roommie.name}</MDBCardTitle>
                            <h5 className="indigo-text"><strong>{roommie.major}</strong></h5>
                            <MDBCardText>{roommie.description}</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    </TinderCard>
                </MDBCol>
            </MDBRow>

         

                // <TinderCard className= 'rummage' onChange= {handleChange} preventSwipe= {['up', 'down']} key= {roommie.name} >
                //     <div className= 'roommieCard' onChange= {handleChange}  style= {{backgroundImage: `url(${roommie.url})`}}>

                //         <h2>{roommie.name}</h2>
                //         <h3>{roommie.major}</h3>
                //         <p>{roommie.description}</p>
                //     </div>

                // </TinderCard>
)))}
         
             </div>
             {(() => {

if (onSwipe = "right") {
    <Link to="/match"></Link>
}
})()}

        </div>
       
        
   
    )
   
}

export default Cards; 

     
     