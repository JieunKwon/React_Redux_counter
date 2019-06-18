import {createAction, handleActions} from 'redux-actions';

// define
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// export
//export const increment = () => ({ type: INCREMENT});
//export const decrement = () => ({ type: DECREMENT});

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);


// init
const initialState = {
  number:0
};

// reducer function
// export default function reducer(state = initialState, action){
//
//   // return state according to action type
//   switch (action.type) {
//     case INCREMENT:
//       return {number: state.number + 1};
//       break;
//
//     case DECREMENT:
//       return {number: state.number - 1};
//       break;
//
//     default:
//       return state;
//
//   }
// }

export default handleActions({
  [INCREMENT]: (state, action) => {
    return { number: state.number + 1 };
  },
  [DECREMENT]: ({ number }) => ({ number: number - 1 })
} , initialState);
