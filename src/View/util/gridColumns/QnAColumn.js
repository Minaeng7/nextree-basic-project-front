const QnAColumn = () => {

    const columns = [
        { field: 'id', headerName: 'No', width: 50 },
        { field: 'dataId', headerName: 'No', width: 50, hide: true},
        { field: 'questionTitle', headerName: 'Title', flex: 1},
        { field: 'quesUser', headerName: 'User' ,width: 150},
        { field: 'regDate', headerName: 'Date' ,width: 150},
        { field: 'answered', headerName: 'Answered' ,width: 150},

    ];

    return columns
}
export default QnAColumn