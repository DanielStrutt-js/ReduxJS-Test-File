import * as actionTypes from '../actions'

const initialState = {
    results: []
};

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                //use .concat instead of .push to creat a new array instead of modifing old array
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            // const id =  2;
            // const newArray = [...state.results]
            // newArray.splice(id, 1)
            const updatedArray = state.results.filter(result => result.id !== action.resultElementId);
            return{
                ...state,
                results: updatedArray
            }
        }
    
        return state;
};

export default resultReducer;

