import {connect} from "react-redux";
import {useEffect} from "react";
import QnAView from "../View/QnA/QnAView";
import {getApiQnaList} from "../modules/QnAReducer";


const QnAContainer = ({qnaList, getApiQnaList}) => {
    useEffect(() => {
        getApiQnaList();
    }, [getApiQnaList])
    return(
        <QnAView qnaList={qnaList}/>
    )
}
export default connect(
    ({qnaHandler}) => ({
        qnaList: qnaHandler.qnaList
    }),
    {
        getApiQnaList,
    }
)(QnAContainer);