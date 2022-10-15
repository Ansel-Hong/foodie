import React from "react";
import ReactPlayer from "react-player";
import "./RecipeVid.css"

function RecipeVid(props) {
  return (
    <section>
      {/* <h2>{props.recipename}</h2> */}
      <div className="player-wrapper">
        <ReactPlayer 
          className="react-player"
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
      </div>
    </section>
  );
}

export default RecipeVid;
