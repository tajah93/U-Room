import React, { useEffect } from 'react';
import TinderCard from 'react-tinder-card';

function Match() {
    const [direction, setDirection] = useState("")



const onSwipe = (direction) => {
    console.log("You swiped" + direction)

}}

const onCardLeftScreen= (myIdentifier) => {
    () => {
  setDirection("left");
  onCardLeftScreen("foobar");
}
}

return (
    <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']} {direction === "right" && <RightComponent />}></TinderCard>
    
)
}