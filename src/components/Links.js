import React from "react";


export default function Links (props){
    return(
        <div>
            <h3>Links</h3>
            <a href= {props.github}>https://github.com/liza</a>
            <a href= {props.linkedin}>https://www.linkedin.com/in/liza/</a>
        </div>
        )
}