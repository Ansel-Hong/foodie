import React from "react";
import ReactPlayer from "react-player";

function RecipeVid(props) {
  return (
    <section>
      <h2>{props.recipename}</h2>
      <ReactPlayer url={props.vid} /> 
    </section>
  );
}

export default RecipeVid;
