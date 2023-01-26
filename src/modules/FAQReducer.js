import {handleActions} from "redux-actions";
import * as api from "./api";

// Action Type
const GET_LIST = 'faq/GET_LIST';
const GET_SUCCESS = 'faq/GET_SUCCESS';
const GET_ERROR = 'faq/GET_ERROR'


//초기 State
const initialState = {
    loading:{
        GET_LIST: false,
    },
    faqList: []
}

// dispatch method
export const getApiFaqList = () => async dispatch => {
    dispatch({type: GET_LIST});
    try {
        const data = await api.getFaqList();
        dispatch({type: GET_SUCCESS, payload: data})
    }catch (e){
        dispatch({type: GET_ERROR, payload: e, error: true})
    }
};

const faqHandler = handleActions(
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
          faqList: action.payload.data
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

export default faqHandler;