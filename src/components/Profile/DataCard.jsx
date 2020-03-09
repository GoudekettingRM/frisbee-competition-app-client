import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/user/actions";
import { updateOrganisation } from "../../store/organisation/actions";

const DataCard = props => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [valueName] = useState(props.name);
  const [dataValue, setDataValue] = useState(props.value);

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (props.about === "user") {
      dispatch(updateUser({ [valueName]: dataValue }));
    } else if (props.about === "organisation") {
      dispatch(updateOrganisation({ [valueName]: dataValue }));
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

export default DataCard;
