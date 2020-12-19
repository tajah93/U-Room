import { Mongoose, MongooseDocument } from 'mongoose';
import React, { useEffect, useState}  from 'react';
import TinderCard from 'react-tinder-card'; 
import './Cards.css';

// ,{ useEffect, useState} 
// import roommies from '.../models/roommies';

function Cards () {
    const [roommie, setRoommate] = useState({
        name: '',
        url: ''
    })

    function handleChange(event) {
        const {key, style} = event.target;

        setRoommate(prevRoommate => {
            return{
                ...prevRoommate,
                [key]: style
            }
        })
    }
    //     // {
    //     //     name: 'Elle Woods',
    //     //     url: 'https://media1.popsugar-assets.com/files/thumbor/YN5HMVHuMrFhsJ0IEQIIs2NCzaY/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/06/08/659/n/1922283/02ba55eb7871cef9_MCDLEBL_EC002/i/Reese-Witherspoon-Elle-Woods.jpg'
    //     // },
    //     // {
    //     //     name: 'Vivian Kensington',
    //     //     url: 'https://i.pinimg.com/originals/8a/d0/bf/8ad0bf02fe5fab1c1e2336dc7bc9e7f3.jpg'
    //     // }
    // ]);


    return (
        <div>
            <h1 className= 'title'>U-Room</h1>

            <div className= 'cardContainer'>

           
            {/* {roommate.map((roommie) => ( */}
                <TinderCard className= 'rummage' onChange= {handleChange} preventSwipe= {['up', 'down']} key= {roommie.name} >
                    <div className= 'roommieCard' onChange= {handleChange}  style= {{backgroundImage: `url(${roommie.url})`}}>

                        <h2>{roommie.name}</h2>
                    </div>

                </TinderCard>
            {/* ))} */}
             </div>

        </div>
    )
}

export default Cards; 