export const types = {
  UPDATE_INPUTS: "UPDATE_INPUTS",
  SHOW_MODAL: "SHOW_MODAL",
}


export function updateInputs(input) {
  return function(dispatch) {
    dispatch({ type: types.UPDATE_INPUTS, input: input })
  }
}
export function togglePopup(popup) {
  return function(dispatch) {
    dispatch({ type: types.SHOW_MODAL, popup: popup })
  }
}
