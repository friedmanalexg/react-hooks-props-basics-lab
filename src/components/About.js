import React from "react";
import Links from "./Links"

function About(props) {
  let bioTrue;

  
  if (!props.bio) {
    return null;
      
  } else {
    bioTrue = <p>{props.bio}</p>
  }
return (
  <div id="about">
    <h2>About Me</h2>
    {bioTrue}
    <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    <Links />
  </div>
);
}


export default About;
