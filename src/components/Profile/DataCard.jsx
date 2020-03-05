import React, { useState } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../store/user/actions";
import { updateOrganisation } from "../../store/organisation/actions";

const DataCard = props => {
  const [editMode, setEditMode] = useState(false);
  const [valueName] = useState(props.name);
  const [dataValue, setDataValue] = useState(props.value);

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log("update info tesT: ", { [valueName]: dataValue }, props.token);
    if (props.about === "user") {
      props.updateUser({ [valueName]: dataValue }, props.token);
    } else if (props.about === "organisation") {
      props.updateOrganisation({ [valueName]: dataValue }, props.token);
    }
    toggleEdit();
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

const mapStateToProps = state => ({
  token: state.session.jwt
});

const mapDispatchToProps = { updateUser, updateOrganisation };

export default connect(mapStateToProps, mapDispatchToProps)(DataCard);
