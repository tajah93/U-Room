import { Mongoose, MongooseDocument } from 'mongoose';
import React, { useEffect, useState}  from 'react';
import TinderCard from 'react-tinder-card'; 
import API from '../../utils/API';
import './Cards.css';



function Cards () {
    const [roommie, setRoommate] = useState({
        name: '',
        url: ''
    })

    useEffect(() => {
        API.getRoomies().then((data) => setRoommate(data))
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



    return (
        <div>
            <h1 className= 'title'>U-Room</h1>

            <div className= 'cardContainer'>

          
            {roommie.map((roommie => {
                <TinderCard className= 'rummage' onChange= {handleChange} preventSwipe= {['up', 'down']} key= {roommie.name} >
                    <div className= 'roommieCard' onChange= {handleChange}  style= {{backgroundImage: `url(${roommie.url})`}}>

                        <h2>{roommie.name}</h2>
                    </div>

                </TinderCard>
}))}
           
             </div>

        </div>
    )
}

export default Cards; 