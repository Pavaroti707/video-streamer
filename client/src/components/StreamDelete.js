import Modal from "react-modal";
import { Link } from "react-router-dom";
import { remove } from "../services/apiServices";

const style = {
  content: {
    marginLeft: "35%",
    marginTop: "150px",
    width: "600px",
    height: "200px",
  },
};

const StreamDelete = ({ match, history }) => {
  const ID = match.params.id;

  const deleteHandler = (e) => {
    e.preventDefault();

    remove(ID, (data) => {
      history.push("/");
    });
  };

  return (
    <div>
      <Modal isOpen={true} style={style} ariaHideApp={false}>
        <h1 style={{ margin: "10px", textAlign: "center" }}>
          Are you sure you want to delete stream?
        </h1>
        <Link to="/">
          <button
            className="ui green inverted button"
            style={{ marginLeft: "100px", padding: "20px" }}
          >
            Back
          </button>
        </Link>
        <button
          className="ui red inverted button"
          style={{ marginLeft: "175px", marginTop: "25px", padding: "20px" }}
          onClick={deleteHandler}
        >
          Delete
        </button>
      </Modal>
    </div>
  );
};

export default StreamDelete;
