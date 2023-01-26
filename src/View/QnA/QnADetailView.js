import {
    Box, Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    Divider,
    Grid, TextField,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getApiQna} from "../../modules/QnAReducer";
import {modQna} from "../../modules/api";

const QnADetailView = () => {
    const _userData = JSON.parse(localStorage.getItem('userData'));
    const qna = useSelector(state => state.qnaHandler.qna);
    const userData = useSelector(state => state.userHandler.userData);
    const dispatch = useDispatch();
    const param = useParams();
    const navigate = useNavigate();
    const [mode, setMode] = useState(false);
    const [answer, setAnswer] = useState({
        id: qna.id,
        questionTitle:qna.questionTitle,
        questionContents:qna.questionContents,
        quesUser: qna.quesUser,
        ansUser: userData,
        regDate:qna.regDate,
        answer: ''
    })

    useEffect(() => {
        dispatch(getApiQna(param.dataId))
    }, [param, dispatch])

    useEffect(() => {
    }, [qna])

    const handleChange = e => {
        setAnswer({
            ...answer,
            id: qna.id,
            questionTitle:qna.questionTitle,
            questionContents:qna.questionContents,
            quesUser: qna.quesUser,
            ansUser: userData,
            regDate:qna.regDate,
            answer: e.target.value
        })
    }
    const goBack = () => {
        navigate('/qna')
    }

    const regAnswer = async (e) => {
        e.preventDefault();
        const result = await modQna(answer);
        if (result.status === 200) {
            navigate('/qna')
        } else {
            alert('답변 등록 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.')
        }
    }


    return (
        <>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 5
                }}
            >
                <Container>
                    <Card>
                        <CardHeader
                            title={qna.questionTitle}
                            sx={{backgroundColor: '#333333', color: '#ffffff'}}
                        />
                        <Divider/>
                        <CardContent>
                            <Grid
                                container
                                spacing={6}
                                wrap="wrap"
                            >
                                <Grid
                                    item
                                    md={4}
                                    sm={6}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        minHeight: '50vh'
                                    }}
                                    xs={12}
                                >
                                    <Typography fontWeight='bold'>
                                        Q :
                                    </Typography>
                                    <Typography>
                                        {qna.questionContents}
                                    </Typography>
                                </Grid>
                                {mode === false &&
                                    <Grid
                                        item
                                        md={10}
                                        sm={6}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            minHeight: '50vh'
                                        }}
                                        xs={12}
                                    >
                                        <Typography fontWeight='bold'>
                                            A :
                                        </Typography>
                                        <Typography>
                                            {qna.answer}
                                        </Typography>
                                    </Grid>
                                }
                                {mode === true &&
                                    <Grid
                                        item
                                        md={10}
                                        sm={6}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            minHeight: '50vh'
                                        }}
                                        xs={12}
                                    >
                                        <Typography fontWeight='bold'>
                                            A :
                                        </Typography>
                                        <TextField name='answer' onChange={(e) => handleChange(e)} multiline rows={10} sx={{width: '100vh'}} placeholder='Answer Here'/>
                                    </Grid>
                                }
                            </Grid>
                        </CardContent>
                        <Divider/>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                p: 2
                            }}
                        >
                            {mode === false &&
                                <Box>
                                    <Button
                                        size='small'
                                        variant="outlined"
                                        sx={{marginRight: 3, backgroundColor: '#000000', color: '#ffffff'}}
                                        onClick={() => setMode(true)}
                                    >
                                        Answer
                                    </Button>
                                    <Button
                                        color="inherit"
                                        size='small'
                                        variant="outlined"
                                        sx={{marginRight: 3}}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        color="inherit"
                                        size='small'
                                        variant="outlined"
                                        onClick={goBack}
                                    >
                                        Back
                                    </Button>

                                </Box>
                            }
                            {mode === true &&
                                <Box>
                                    <Button
                                        size='small'
                                        variant="outlined"
                                        sx={{marginRight: 3, backgroundColor: '#000000', color: '#ffffff'}}
                                        onClick={regAnswer}
                                    >
                                        Answer
                                    </Button>
                                    <Button
                                        color="inherit"
                                        size='small'
                                        variant="outlined"
                                        onClick={goBack}
                                    >
                                        Back
                                    </Button>
                                </Box>
                            }
                        </Box>
                    </Card>
                </Container>
            </Box>
        </>
    )
}
export default QnADetailView;