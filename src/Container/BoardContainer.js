import {connect} from "react-redux";
import BoardView from "../View/Board/BoardView";
import {getApiBoardList} from "../modules/BoardReducer";
import {useEffect} from "react";


const BoardContainer = ({boardList, getApiBoardList}) => {
    useEffect(() => {
        getApiBoardList();
    }, [getApiBoardList])

    return(
        <BoardView
            boardList={boardList}
        />
    )
}
export default connect(
    ({boardHandler}) => ({
        boardList: boardHandler.boardList
    }),
    {
        getApiBoardList,
    },
)(BoardContainer);