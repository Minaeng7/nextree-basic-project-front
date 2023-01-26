import {combineReducers} from "redux";
import noticeHandler from "./NoticeReducer";
import boardHandler from "./BoardReducer";
import faqHandler from "./FAQReducer";
import menuHandler from "./MenuReducer";
import qnaHandler from "./QnAReducer";
import userHandler from "./UserReducer";

const rootReducer = combineReducers({
    noticeHandler,
    boardHandler,
    faqHandler,
    menuHandler,
    qnaHandler,
    userHandler
});
export default rootReducer;