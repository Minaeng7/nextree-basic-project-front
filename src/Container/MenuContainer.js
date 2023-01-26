import {connect} from "react-redux";
import {getApiMenuList} from "../modules/MenuReducer";
import {useEffect} from "react";
import Menu from "../View/Menu/Menu";

const MenuContainer = ({menuList, getApiMenuList, logout}) => {

    useEffect(() => {
        getApiMenuList()
    }, [getApiMenuList])

    return (
        <>
            <Menu menuList={menuList} logout={logout}/>
        </>
    )
}

export default connect(
    ({menuHandler}) => ({
        menuList: menuHandler.menuList
    }),
    {
    getApiMenuList,
    }
)(MenuContainer)