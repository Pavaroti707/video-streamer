import React from "react";
import { Field, reduxForm } from "redux-form";
import { insert, list } from "../services/apiServices";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const inputStyle = {
  margin: "15px",
  marginBottom: "5px",
  height: "25px",
  width: "250px",
  borderRadius: "4px",
  fontSize: "1.2rem",
};

const StreamCreate = ({ accessToken, match, history }) => {
  const [records, setRecords] = useState([]);
  const [tempTitle, setTempTitle] = useState("");
  const [tempDesc, setTempDesc] = useState("");

  useEffect(() => {
    list((obj) => setRecords(obj));

    return () => setRecords([]);
  }, []);

  const titleChange = (e) => {
    setTempTitle(e.target.value);
  };

  const descriptionChange = (e) => {
    setTempDesc(e.target.value);
  };

  const saveHandler = (e) => {
    e.preventDefault();

    if (accessToken === "") {
      return alert("Please Login before creating a new stream");
    }

    if (tempTitle === "") {
      return alert("Please Enter Stream Title");
    }

    if (tempDesc === "") {
      return alert("Please Enter Stream Description");
    }

    const record = {
      id: records.length + 1,
      title: tempTitle,
      description: tempDesc,
      userID: accessToken,
    };

    e.preventDefault();

    insert(record, (obj) => {
      if (obj) return window.location.assign("/");
    });

    e.preventDefault();
  };

  return (
    <div>
      <form>
        <div>
          <div>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder="Title"
              style={inputStyle}
              onChange={titleChange}
            />
          </div>
        </div>
        <div>
          <div>
            <Field
              name="description"
              component="input"
              type="text"
              placeholder="Description"
              style={inputStyle}
              onChange={descriptionChange}
            />
          </div>
        </div>
      </form>
      <div>
        <Link to="/">
          <button
            className="ui red inverted button"
            style={{ marginLeft: "15px", marginTop: "25px" }}
          >
            Back
          </button>
        </Link>
        <button
          type="button"
          className="ui green inverted button"
          style={{ marginLeft: "100px" }}
          onClick={saveHandler}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default reduxForm({ form: "create" })(StreamCreate);
