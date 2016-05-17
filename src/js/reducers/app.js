import { ACTION_TYPES } from '../actions/actionTypes';
import consts from '../lib/constants';

const initialState = {
    message: '',
    loading: false
}

export default function(state=initialState, action) {
    switch(action.type){
    case ACTION_TYPES.REQ_TIME:
        return Object.assign({}, state, {
            loading: action.loading
        })
    case ACTION_TYPES.REC_TIME:
        return Object.assign({}, state, {
            loading: action.loading,
            message: action.message
        })
    default:
        return state;
    }
}
