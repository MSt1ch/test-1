import {types} from '../actions'


const initialState = {
  popup: {
    show: 0
  },
  inputs: [
    {
      value: 'Стас',
      id: Math.floor(Math.random() * 0xFFFF),
      name: 'firstname'
    },
    {
      value: 'Матиевский',
      id: Math.floor(Math.random() * 0xFFFF),
      name: 'lasttname'
    }
  ],
  greeting: 'Привет Стас'
};




export const reducer = (state = initialState, actions) => {
    const {type, input} = actions;
    console.log(type);

    switch(type) {

      case types.UPDATE_INPUTS: {
        const updatedInputs = state.inputs.map( (item)=>{
          if (item.id === input.id) {
            item.value = input.value;
          }
          return item;
        })
        return {
          ...state,
          inputs: updatedInputs
        }
      }


      case types.SHOW_MODAL: {
        const toggledPopup = state.popup;
        toggledPopup.show = !toggledPopup.show;
        console.log(state);
        return {
          ...state,
          popup: toggledPopup
        }
      }

      default:
        return state
    }

}
