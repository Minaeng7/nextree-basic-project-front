import {
    Box, Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    Divider,
    Grid,
    Typography
} from "@mui/material";
import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getApiNotice} from "../../modules/NoticeReducer";

const NoticeDetailView = () => {
    //const userData = JSON.parse(localStorage.getItem('userData'));
    const notice = useSelector(state => state.noticeHandler.notice);
    const dispatch = useDispatch();
    const param = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getApiNotice(param.dataId))
    }, [param, dispatch])

    useEffect(() => {
        console.log(notice);
    }, [notice])

    const goBack = () => {
        navigate('/notice')
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
                            title={notice.title}
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
                                    <Typography>
                                        {notice.contents}
                                    </Typography>

                                </Grid>
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

                            <div>
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

                            </div>

                        </Box>
                    </Card>
                </Container>
            </Box>
        </>
    )
}
export default NoticeDetailView;