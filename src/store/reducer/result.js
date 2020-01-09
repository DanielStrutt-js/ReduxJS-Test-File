import * as actionTypes from '../actions/actionsTypes';
import { updatedObject, updateObject } from '../utility';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElementId);
    return updateObject(state, {results: updatedArray})
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            //use .concat instead of .push to creat a new array instead of modifing old array
            return updateObject(state, { results: state.results.concat({id: new Date(), value: action.result * 2})});
               
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action)
        }
        return state;
};

export default resultReducer;

