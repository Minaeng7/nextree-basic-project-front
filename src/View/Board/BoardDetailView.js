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
import {getApiBoard} from "../../modules/BoardReducer";

const BoardDetailView = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const board = useSelector(state => state.boardHandler.board);
    const dispatch = useDispatch();
    const param = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getApiBoard(param.dataId))
    }, [param, dispatch])

    useEffect(() => {
    }, [board])

    const goBack = () => {
        navigate('/board')
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
                            title={board.title}
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
                                        {board.contents}
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
                            <Box>
                                {board.user.userId !== userData.userId &&
                                <Button
                                    color="inherit"
                                    size='small'
                                    variant="outlined"
                                    sx={{marginRight: 3}}
                                >
                                    Edit
                                </Button>
                                }
                                <Button
                                    color="inherit"
                                    size='small'
                                    variant="outlined"
                                    onClick={goBack}
                                >
                                    Back
                                </Button>
                            </Box>
                        </Box>
                    </Card>
                </Container>
            </Box>
        </>
    )
}
export default BoardDetailView;