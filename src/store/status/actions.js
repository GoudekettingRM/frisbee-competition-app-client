export const SET_NEW_STATUS = "status/SET_NEW_STATUS_CODE_AND_MESSAGE";

export function setNewStatusAction(statusData) {
  return {
    type: SET_NEW_STATUS,
    payload: statusData
  };
}
