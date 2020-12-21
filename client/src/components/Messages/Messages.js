import React from "react";
import "./Messages.css";
import Thread from  "../Thread/Thread";

function Messages() {
    return (
    <div className= "messages">
        <Thread
            name= "Mark Zee"
            message= "Hey!"
            url= "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-us.s3.amazonaws.com%2Fb70c5e96-58b7-11ea-abe5-8e03987b7b20?source=google-amp&fit=scale-down&width=500"
            />
        <Thread
            name= "Patrick Bateman"
            message= "Hello, let's compare business cards.."
            url= "https://upload.wikimedia.org/wikipedia/en/5/52/American-psycho-patrick-bateman.jpg"
            />
    </div>
    )
};

export default Messages;