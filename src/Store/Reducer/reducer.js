import {TITLE_CHANGED} from '../action/action'

const INITIAL_STATE={
title:undefined
}

export const titleReducer =(state = INITIAL_STATE, action)=>{
    const { type, payload } = action;
    const { data } = payload || {};
    switch(type){
        case TITLE_CHANGED:
        return{
            ...state,
         title: data
        }
        default:
        return INITIAL_STATE
    }
    
}