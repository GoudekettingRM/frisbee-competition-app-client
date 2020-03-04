import React, { useState } from "react";

export const DataCard = props => {
  const [editMode, setEditMode] = useState(false);

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  if (editMode) {
    return (
      <div>
        You will be able to edit me, but not yet..
        <button onClick={toggleEdit}>cancel</button>
      </div>
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
