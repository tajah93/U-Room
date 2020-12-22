import { Mongoose, MongooseDocument } from 'mongoose';
import React, { useEffect, useState}  from 'react';
import TinderCard from 'react-tinder-card'; 
import API from '../../utils/API';
import './Cards.css';
import { MDBCard, MDBBtn, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import MatchBtns from '../MatchBtns/MatchBtns';
import { Link } from 'react-router-dom';


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
    // state = { redirect: null };
    // render() {
    //   if (this.state.redirect) {
    //     return <Redirect to={this.state.redirect} />
    //   }

   
        
console.log(roommie)
    return (
        <div>
            <h1 className= 'title'>U-Room</h1>

            <div className= 'cardContainer'>

            
            {roommie.map((roommie => (
                

                <MDBRow>
                <MDBCol className="profCard" style={{ maxWidth: "40rem" }}>
                <TinderCard className= 'rummage'>
                    <MDBCard reverse  onChange= {handleChange} preventSwipe= {['up', 'down']} onSwipe={['right']} key= {roommie._id}>
                        <MDBCardImage cascade className="img" style={{ height: '20rem' }} className= 'roommieCard' onChange= {handleChange}  src={roommie.url}/>
                        <MDBCardBody cascade className="text-center">
                            <MDBCardTitle>{roommie.name}</MDBCardTitle>
                            <h5 className="indigo-text"><strong>{roommie.major}</strong></h5>
                            <MDBCardText>{roommie.description}</MDBCardText>
                            <Link to={"/roommies/" + roommie._id}><MDBBtn  color= "rgba(0, 0, 0, 0.822)"  className= "icons"><MDBIcon far icon="heart" /></MDBBtn></Link>

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
            
< MatchBtns />
        </div>
       
        
   
    )
   
}

export default Cards; 

     
     