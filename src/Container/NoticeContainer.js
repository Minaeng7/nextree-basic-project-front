import React, {useEffect} from 'react';
import {connect} from "react-redux";
import NoticeView from "../View/Notice/NoticeView";
import {getApiNoticeList} from "../modules/NoticeReducer";

const NoticeContainer = ({noticeList, getApiNoticeList}) => {

    useEffect(() => {
        getApiNoticeList();
    },[getApiNoticeList])

    return(
        <NoticeView
            noticeList={noticeList}
        />
    )
}
export default connect(
    ({noticeHandler}) => ({
        noticeList: noticeHandler.noticeList
    }),
    {
        getApiNoticeList,
    },
)(NoticeContainer);