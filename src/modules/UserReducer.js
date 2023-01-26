import {handleActions} from "redux-actions";
import * as api from "./api";

// Action Type
const GET_LIST = 'user/GET_LIST';
const GET_SUCCESS = 'user/GET_SUCCESS';
const GET_ERROR = 'user/GET_ERROR'


//초기 State
const initialState = {
    loading:{
        GET_LIST: false,
    },
    userData: undefined
}

// dispatch method
export const getApiUserData = (loginData) => async dispatch => {
    dispatch({type: GET_LIST});
    try {
        const data = await api.getUserData(loginData);
        dispatch({type: GET_SUCCESS, payload: data})
        return data;
    }catch (e){
        dispatch({type: GET_ERROR, payload: e, error: true})
        return e;
    }
};

const userHandler = handleActions(
    {
        [GET_LIST]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_LIST: true,
            },
        }),
        [GET_SUCCESS]: (state, action) => ({
            ...state,
            loading:{
                ...state.loading,
                GET_LIST: false,
            },
            userData: {
                userId: action.payload.data.userId,
                userName: action.payload.data.userName,
                auth: action.payload.data.auth
            }
        }),
        [GET_ERROR]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_LIST: false,
            }
        }),
    },
    initialState,
);

export default userHandler;