const QnARows = (qnaData) => {

    const rows= [];

    qnaData.map((item, itemIdx) => {
        let row = {
            id: itemIdx + 1,
            dataId: item.id,
            questionTitle: item.questionTitle,
            quesUser: item.quesUser.userId,
            regDate: item.regDate,
            answered: item.answer ? 'O': 'X',
        };
        rows.push(row)
    })

    return rows
}
export default QnARows