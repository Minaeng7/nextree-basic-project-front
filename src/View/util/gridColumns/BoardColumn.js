const BoardColumn = () => {

    const columns = [
        { field: 'id', headerName: 'No', width: 50 },
        { field: 'dataId', headerName: 'No', width: 50, hide: true},
        { field: 'title', headerName: 'Title', flex: 1},
        { field: 'user', headerName: 'User' ,width: 150},
        { field: 'createDate', headerName: 'Date' ,width: 150},
        { field: 'viewCount', headerName: 'View' ,width: 150},
    ];

    return columns
}
export default BoardColumn