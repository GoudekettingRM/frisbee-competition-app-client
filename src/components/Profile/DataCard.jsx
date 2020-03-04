import React, { useState } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../store/user/actions";

const DataCard = props => {
  const [editMode, setEditMode] = useState(false);
  const [dataValue, setDataValue] = useState(props.value);

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log("Edit form submitted!");
    props.updateUser("hello");
  };

  const onChange = event => {
    setDataValue(event.target.value);
  };

  if (editMode) {
    return (
      <form onSubmit={onSubmit}>
        <input type="text" value={dataValue} onChange={onChange} />

        <button type="submit">edit</button>
        <button
          type="button"
          onClick={() => {
            toggleEdit();
            setDataValue(props.value);
          }}>
          cancel
        </button>
      </form>
    );
  }

  return (
    <div>
      <p>
        {props.label}: {props.value}
      </p>
      <button onClick={toggleEdit}>Edit</button>
    </div>
  );
};

const mapDispatchToProps = { updateUser };

export default connect(null, mapDispatchToProps)(DataCard);
