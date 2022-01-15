import { list } from "../services/apiServices";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const fpStyle = {
  marginTop: "0px",
  marginLeft: "10px",
  fontSize: "1.2rem",
  width: "250px",
};

const spStyle = {
  marginTop: "25px",
  fontSize: "0.9rem",
  marginBottom: "25px",
  marginLeft: "-225px",
  width: "250px",
};

const StreamList = ({ logged, accessToken }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    list((obj) => setData(obj));

    return () => setData([]);
  }, []);

  return (
    <div className="list">
      <ul
        style={{
          listStyle: "none",
          margin: "0px",
          width: "1000px",
        }}
      >
        {data.map((obj) => (
          <li key={obj.id}>
            <div
              style={{
                display: "flex",
                overflow: "hidden",
                justifyContent: "flex-start",
              }}
            >
              <Link to={"/show/" + obj.id}>
                <i className="fa fa-camera-retro fa-3x" />
              </Link>
              <p style={fpStyle}>
                {obj.title} <br />
              </p>
              <p style={spStyle}>{obj.description}</p>
              {obj.userID === accessToken ? (
                <>
                  <Link to={"/edit/" + obj.id}>
                    <button
                      className="ui blue inverted button"
                      style={{ marginLeft: "320px" }}
                    >
                      <i className="fa fa-pencil" aria-hidden="true" />
                    </button>
                  </Link>
                  <Link to={"/delete/" + obj.id}>
                    <button
                      className="ui red inverted button"
                      style={{
                        marginLeft: "10px",
                      }}
                    >
                      <i className="fa fa-trash" aria-hidden="true" />
                    </button>
                  </Link>
                </>
              ) : (
                <></>
              )}
            </div>
          </li>
        ))}
      </ul>
      {logged ? (
        <Link to={"/new"}>
          <button
            className="ui green inverted button"
            style={{ marginLeft: "40px" }}
          >
            Create a Stream
          </button>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};

export default StreamList;
