import { ACTION_TYPES } from './actionTypes';
import fetch from 'isomorphic-fetch';
import constants from '../lib/constants';

export function requestTime(){
    return {
        type: ACTION_TYPES.REQ_TIME,
        loading: true
    }
}

export function receivedTime(message){
    return {
        type: ACTION_TYPES.REC_TIME,
        loading: true,
        message
    }
}

export function fetchTime(page=1) {
    return dispatch => {
        dispatch(requestTime());
        return fetch(`/birds/about`,
            {headers: {Accept: 'application/json'}})
            .then(response => {
                debugger;
              return response.json()
            })
            .then(message => dispatch(receivedTime(message.message)))
    }
}