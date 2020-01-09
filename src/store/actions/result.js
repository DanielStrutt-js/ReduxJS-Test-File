import * as actionTypes from './actionsTypes';

export const saveResult = (res) => {
    //const updatedResult = res * 2
    //can modifie action but better to modie in reducer.
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
};



export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter)
            dispatch(saveResult(res));
        }, 2000);
    }
    return
};
    

export const deleteResult = (resElID) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElementId: resElID
    };
};