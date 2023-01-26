import {Route, Routes} from "react-router-dom";
import NoticeContainer from "../Container/NoticeContainer";
import BoardContainer from "../Container/BoardContainer";
import FAQContainer from "../Container/FAQContainer";
import QnAContainer from "../Container/QnAContainer";
import React from "react";
import BoardDetailView from "./Board/BoardDetailView";
import MenuContainer from "../Container/MenuContainer";
import LoginPage from "./LoginPage";
import NoticeDetailView from "./Notice/NoticeDetailView";
import QnADetailView from "./QnA/QnADetailView";
import CreateBoardView from "./Board/CreateBoardView";
import CreateNoticeView from "./Notice/CreateNoticeView";
import CreateQnAView from "./QnA/CreateQnAView";

const routePages = ({userData, setUserData}) => {

    const logout = () => {
        localStorage.clear();
        setUserData(undefined);
        window.location.href = '/login'
    }

    return (
        <>
            {!userData &&
                <div>
                    <Routes>
                        <Route path='/login' element={<LoginPage/>}/>
                    </Routes>

                </div>
            }
            {userData &&
                <div>
                    <MenuContainer logout={logout}/>
                    <Routes>
                        <Route path='/notice'>
                            <Route path="/notice/:dataId" element={<NoticeDetailView/>}/>
                            <Route path="/notice/new" element={<CreateNoticeView/>}/>
                            <Route path="" element={<NoticeContainer/>}/>
                        </Route>
                        <Route path="/board">
                            <Route path="/board/:dataId" element={<BoardDetailView/>}/>
                            <Route path="/board/new" element={<CreateBoardView/>}/>
                            <Route path="" element={<BoardContainer/>}/>
                        </Route>
                        <Route path="/faq" element={<FAQContainer/>}/>
                        <Route path="/qna">
                            <Route path="/qna/:dataId" element={<QnADetailView/>}/>
                            <Route path="/qna/new" element={<CreateQnAView/>}/>
                            <Route path="" element={<QnAContainer/>}/>
                        </Route>
                    </Routes>
                </div>
            }
        </>
    )

}
export default routePages