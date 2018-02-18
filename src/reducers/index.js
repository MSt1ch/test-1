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
  greeting: 'Привет Стас!'
};




export const reducer = (state = initialState, actions) => {
    const {type, input} = actions;
    console.log(type);

    switch(type) {

      case types.UPDATE_INPUTS: {
        var greeting = state.greeting;
        const updatedInputs = state.inputs.map( (item, index)=>{

          if (item.id === input.id) {
            item.value = input.value;
            if( index === 0) {
              greeting = "Привет " + item.value + "!";
            }

          }
          return item;
        })
        return {
          ...state,
          inputs: updatedInputs,
          greeting: greeting
        }
      }


      case types.SHOW_MODAL: {
        return {
          ...state,
          popup: {
            show: 1
          }
        }
      }

      case types.HIDE_MODAL: {
        return {
          ...state,
          popup: {
            show: 0
          }
        }
      }

      default:
        return state
    }

}
