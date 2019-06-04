# React_Redux_counter

Show the simple counter to practice React Redux.

To 


> Redux Actions

 
1. install
       
       npm install --save redux-actions

2. createAction

createAction 
​createAction(type) 
​createAction(type, payloadCreator) 
​createAction(type, payloadCreator, metaCreator)

Calling createAction with a type will return an action creator for dispatching actions. 

'type' must implement toString and is the only required parameter for createAction.

      export const increment = createAction('INCREMENT');
      export const decrement = createAction('DECREMENT');

      increment(10); // { type: 'INCREMENT', payload: 10 }
      decrement([1, 42]); // { type: 'DECREMENT', payload: [1, 42] }
      
3. handleAction
      
2. Usage all actions 

            import { createActions, handleActions, combineActions } from 'redux-actions';

            const defaultState = { counter: 10 };

            const { increment, decrement } = createActions({
              INCREMENT: (amount = 1) => ({ amount }),
              DECREMENT: (amount = 1) => ({ amount: -amount })
            });

            const reducer = handleActions(
              {
                [combineActions(increment, decrement)]: (
                  state,
                  { payload: { amount } }
                ) => {
                  return { ...state, counter: state.counter + amount };
                }
              },
              defaultState
            );

            export default reducer;


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

