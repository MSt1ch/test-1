export const types = {
  UPDATE_INPUTS: "UPDATE_INPUTS",
  SHOW_MODAL: "SHOW_MODAL",
  HIDE_MODAL: "HIDE_MODAL",
}


export function updateInputs(input) {
  return function(dispatch) {
    dispatch({ type: types.UPDATE_INPUTS, input: input })
  }
}
export function togglePopup() {
  return function(dispatch) {
    dispatch({ type: types.SHOW_MODAL})
  }
}

export function closePopup() {
  return function(dispatch) {
    dispatch({ type: types.HIDE_MODAL})
  }
}
