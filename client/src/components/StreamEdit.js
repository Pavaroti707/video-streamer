import React from "react";
import { update, read } from "../services/apiServices";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const inputStyle = {
  margin: "15px",
  marginBottom: "5px",
  height: "35px",
  width: "350px",
  borderRadius: "4px",
  fontSize: "1.2rem",
  marginLeft: "40%",
};

let StreamEdit = ({ match }) => {
  const [data, setData] = useState([]);
  const [ID] = match.params.id;
  const [tempT, setTempT] = useState(data.title);
  const [tempD, setTempD] = useState(data.description);

  useEffect(() => {
    if (ID !== 0) {
      read(ID, (data) => {
        setData(data);
      });
    }

    return () => setData([]);
  }, [ID]);

  useEffect(() => {
    setTempT(data.title);
    setTempD(data.description);
  }, [data]);

  const titleUpdate = (e) => {
    console.log(e.target.value);
    setTempT(e.target.value);
  };

  const descriptionUpdate = (e) => {
    console.log(e.target.value);
    setTempD(e.target.value);
  };

  const saveHandler = (e) => {
    e.preventDefault();

    const record = {
      id: data.id,
      title: tempT,
      description: tempD,
      userID: data.userID,
    };

    update(ID, record, (record) => {
      if (record) return window.location.assign("/");
      console.log("Error occured while editing stream!");
    });
  };

  return (
    <div>
      <form>
        <div>
          <div>
            <input
              type="text"
              defaultValue={data.title}
              style={inputStyle}
              onChange={titleUpdate}
            />
          </div>
        </div>
        <div>
          <div>
            <input
              type="text"
              defaultValue={data.description}
              style={inputStyle}
              onChange={descriptionUpdate}
            />
          </div>
        </div>
        <div>
          <Link to="/">
            <button
              className="ui red inverted button"
              style={{ marginLeft: "40%", marginTop: "25px" }}
            >
              Back
            </button>
          </Link>
          <button
            className="ui green inverted button"
            style={{ marginLeft: "13%" }}
            onClick={saveHandler}
            type="button"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default StreamEdit;
