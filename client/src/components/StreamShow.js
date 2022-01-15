import { read } from "../services/apiServices";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import flv from "flv.js";

const style = {
  margin: "25px",
  marginTop: "-100px",
};

const StreamShow = ({ match }) => {
  const [data, setData] = useState([]);
  const [id] = match.params.id;

  const video = useRef();

  useEffect(() => {
    if (id !== 0) {
      read(id, (data) => {
        setData(data);
      });
    }

    initializeVideoPlayer();

    return () => setData([]);
  }, [id]);

  const initializeVideoPlayer = () => {
    let player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });

    player.attachMediaElement(video.current);
    player.load();
  };

  return (
    <div style={style}>
      <video
        ref={video}
        width="800px"
        height="500px"
        style={{ marginTop: "100px" }}
        controls
      />

      <ul
        style={{
          listStyle: "none",
        }}
      >
        <li
          style={{
            fontSize: "2.5rem",
            marginBottom: "25px",
            marginTop: "15px",
            marginLeft: "-40px",
          }}
        >
          {data.title}
        </li>
        <li style={{ fontSize: "1.5rem", marginLeft: "-25px" }}>
          {data.description}
        </li>
      </ul>
      <Link to="/">
        <button
          className="ui red inverted button"
          style={{ marginLeft: "15px", marginTop: "25px", padding: "1.5rem" }}
        >
          Back
        </button>
      </Link>
    </div>
  );
};

export default StreamShow;
