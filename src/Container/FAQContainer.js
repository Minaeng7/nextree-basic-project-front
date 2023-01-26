import {connect} from "react-redux";
import {getApiFaqList} from "../modules/FAQReducer";
import FAQView from "../View/FAQ/FAQView";
import {useEffect} from "react";


const FAQContainer = ({faqList, getApiFaqList}) => {
    useEffect(() => {
        getApiFaqList();
    }, [getApiFaqList])
    return (
            <FAQView faqList={faqList}/>
    )
}
export default connect(
    ({faqHandler}) => ({
        faqList: faqHandler.faqList
    }),
    {
        getApiFaqList,
    }
)(FAQContainer);