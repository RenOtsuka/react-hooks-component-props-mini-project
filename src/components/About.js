import React from "react";

function About({image, about}){
    return(
        <aside>
            <img src={image || "https://via.placeholder.com/215"} alt="blog logo" defaultValue="https://via.placeholder.com/215"/>
            <p>{about}</p>
        </aside>
    )
}

export default About;