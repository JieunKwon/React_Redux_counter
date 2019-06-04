# React_Redux_counter

Show the simple counter to practice React Redux 


> Used handleAction


1. src/store/modules/counter.js

      For state of counter, used handleActions instead of switch.
      
        // If use switch, do action according to action type; increment and decrement
 
        export default function reducer(state = initialState, action){

          // return state 
          switch (action.type) {
            
            case INCREMENT:
              return {number: state.number + 1};
              break;

            case DECREMENT:
              return {number: state.number - 1};
              break;

            default:
              return state;

          }
        }

       // If use handleAction
       
        import { handleAction } from 'redux-actions';
        
        ...
        
        export default handleActions({
          [INCREMENT]: (state, action) => {
            return { number: state.number + 1 };
          }, 
          [DECREMENT]: (state, action) => {
            return { number: state.number - 1 };
          } 
        }, initialState);

