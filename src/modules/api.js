import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
})


export function getUserData(data) {
    return axiosInstance
        .post('api/user/getUserData', data)
        .then(res => res)
        .catch(err => err)
}

export function regUser(data) {
    return axiosInstance
        .post('api/user/regUser', data)
        .then(res => res)
        .catch(err => err)
}

export function getNoticeList() {
    return axiosInstance
        .post('api/notice/getNoticeList')
        .then(res => res)
        .catch(err => err)
}

export function getNotice(dataId) {
    return axiosInstance
        .post(`api/notice/getNotice/${dataId}`)
        .then(res => res)
        .catch(err => err)
}

export function regNotice(data) {
    return axiosInstance
        .post('api/notice/regNotice', data)
        .then(res => res)
        .catch(err => err)
}

export function getBoardList() {
    return axiosInstance
        .post('api/board/getBoardList')
        .then(res => res)
        .catch(err => err)
}

export function getBoard(dataId) {
    return axiosInstance
        .post(`api/board/getBoard/${dataId}`)
        .then(res => res)
        .catch(err => err)
}

export function regBoard(data) {
    return axiosInstance
        .post('api/board/regBoard', data)
        .then(res => res)
        .catch(err => err)
}

export function getFaqList() {
    return axiosInstance
        .post('api/faq/getFaqList')
        .then(res => res)
        .catch(err => err)
}

export function getQnaList() {
    return axiosInstance
        .post('api/qna/getQnAList')
        .then(res => res)
        .catch(err => err)
}

export function getQna(dataId) {
    return axiosInstance
        .post(`api/qna/getQnA/${dataId}`)
        .then(res => res)
        .catch(err => err)
}

export function regQna(data) {
    return axiosInstance
        .post('api/qna/regQnA', data)
        .then(res => res)
        .catch(err => err)
}
export function modQna(data) {
    return axiosInstance
        .post('api/qna/modQnA', data)
        .then(res => res)
        .catch(err => err)
}

export function getMenuList() {
    return axiosInstance
        .post('api/common/getSideMenuList')
        .then(res => res)
        .catch(err => err)
}