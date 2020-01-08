import * as actionTypes from '../actions'

const initialState = {
    counter: 0
    
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {

    case actionTypes.INCREMENT :
        return{
            //...state serves to distribut the state into the return before modifing the counter
             //state (if you don't distribut old state first it will delete any states that arn't modified(ie: result state))
            ...state,
            counter: state.counter + 1
        }
    
    case actionTypes.DECREMENT :
        return{
            ...state,
            counter: state.counter - 1
        } 

    case actionTypes.ADD:
        return{
            ...state,
            counter: state.counter + action.value
        }

    case actionTypes.SUBTRACT:
        return{
            ...state,
            counter: state.counter - action.value
        }
    }
    
        return state;
};

export default counterReducer;

