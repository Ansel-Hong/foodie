import React from "react";
import ReactPlayer from "react-player";

function RecipeVid(props) {
  return (
    <section>
      <h2>{props.recipename}</h2>
      <ReactPlayer
        url={props.vid}
        config={{
          youtube: {
            width: "100%",
            playerVars: {
              autoplay: 1,
              controls: 0,
              autohide: 1,
              wmode: "opaque",
              origin: window.location.href,
            },
          },
        }}
      />
    </section>
  );
}

export default RecipeVid;
