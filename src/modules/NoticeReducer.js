import {handleActions} from "redux-actions";
import * as api from "./api";

// Action Type
const GET_LIST = 'notice/GET_LIST';
const GET_LIST_SUCCESS = 'notice/GET_LIST_SUCCESS';
const GET_NOTICE_SUCCESS = 'notice/GET_NOTICE_SUCCESS';
const GET_ERROR = 'notice/GET_ERROR'


//초기 State
const initialState = {
    loading:{
        GET_LIST: false,
    },
    noticeList: [],
    notice:{}
}

// dispatch method
export const getApiNoticeList = () => async dispatch => {
    dispatch({type: GET_LIST});
    try {
        const data = await api.getNoticeList();
        dispatch({type: GET_LIST_SUCCESS, payload: data})
    }catch (e){
        dispatch({type: GET_ERROR, payload: e, error: true})
    }
};

export const getApiNotice = (dataId) => async dispatch => {
    dispatch({type:GET_LIST});
    try {
        const data = await api.getNotice(dataId);
        dispatch({type: GET_NOTICE_SUCCESS, payload: data})
    }catch (e) {
        dispatch({type:GET_ERROR,payload:e, error: true})
    }
}

const noticeHandler = handleActions(
    {
        [GET_LIST]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_LIST: true,
            },
        }),
        [GET_LIST_SUCCESS]: (state, action) => ({
          ...state,
          loading:{
              ...state.loading,
              GET_LIST: false,
          },
          noticeList: action.payload.data
        }),
        [GET_NOTICE_SUCCESS]: (state, action) => ({
            ...state,
            loading:{
                ...state.loading,
                GET_LIST: false,
            },
            notice: action.payload.data
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

export default noticeHandler;