import {
    AppBar,
    Box,
    Button,
    Container,
    Grid, Input,
    TextField, Toolbar,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {regNotice} from "../../modules/api";
import {useSelector} from "react-redux";

const CreateNoticeView = () => {
    const navigate = useNavigate()
    const userData = useSelector(state => state.userHandler.userData);
    const [newNotice, setNewNotice] = useState({
        title:'',
        contents:'',
        user: userData
    })

    const handleChange = e => {
        setNewNotice({
            ...newNotice,
            [e.target.name]: e.target.value
        })
    }
    const goBack = () => {
        navigate('/notice')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await regNotice(newNotice);
        if (result.status === 200) {
            navigate('/notice')
        } else {
            alert('게시물 작성 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.')
        }
    }

    return (
        <>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                }}
                alignItems='center'
            >
                <AppBar
                    position="static"
                    color="default"
                    elevation={0}
                    sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}
                >
                    <Toolbar sx={{height: 50}}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Typography sx={{my: 5}} fontWeight={'bold'} color="text.secondary" align="center">
                                    new Notice
                                </Typography>
                            </Grid>
                            <Grid item xs>
                            </Grid>
                            <Box sx={{marginTop: 3}}>
                                <Button type='submit' variant={"contained"} size={'small'} onClick={handleSubmit} sx={{
                                    marginRight: 1,
                                    backgroundColor: '#000000',
                                    color: '#ffffff'
                                }}>Save</Button>
                                <Button variant={"outlined"} size={'small'} color={'inherit'}
                                        onClick={goBack}>Back</Button>
                            </Box>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <Container sx={{marginLeft: 4, py: 5}}>
                    <Box component='form'>
                        <Input sx={{display: 'flex', width: '90vw', marginBottom: 3}} name='title'
                               placeholder={'Title'} onChange={handleChange}/>
                        <TextField multiline rows={20} sx={{display: 'flex', width: '90vw'}} name='contents'
                                   placeholder={'Contents'} onChange={handleChange}/>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
export default CreateNoticeView