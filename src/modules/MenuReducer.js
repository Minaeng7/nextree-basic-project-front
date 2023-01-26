import {handleActions} from "redux-actions";
import * as api from "./api";

// Action Type
const GET_LIST = 'menu/GET_LIST';
const GET_SUCCESS = 'menu/GET_SUCCESS';
const GET_ERROR = 'menu/GET_ERROR'


//초기 State
const initialState = {
    loading:{
        GET_LIST: false,
    },
    menuList: []
}

// dispatch method
export const getApiMenuList = () => async dispatch => {
    dispatch({type: GET_LIST});
    try {
        const data = await api.getMenuList();
        dispatch({type: GET_SUCCESS, payload: data})
    }catch (e){
        dispatch({type: GET_ERROR, payload: e, error: true})
    }
};

const menuHandler = handleActions(
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
            menuList: action.payload.data
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

export default menuHandler;