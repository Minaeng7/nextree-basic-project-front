import {
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {regUser} from "../modules/api";
import {getApiUserData} from "../modules/UserReducer";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [mod, setMod] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        userId: '',
        password: ''
    });
    const [regData, setRegData] = useState({
        userId: '',
        userName: '',
        password: ''
    });

    useEffect(() => {
    }, [mod])

    const handleChange = e => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }
    const handleChangeRegData = e => {
        setRegData({
            ...regData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitRegForm = async (e) => {
        e.preventDefault();
        const result = await regUser(regData);
        if (result.status === 200) {
            setLoginData({
                userId: '',
                password: ''
            })
            setRegData({
                userId: '',
                userName: '',
                password: ''
            })
            setMod(false);
        } else {
            alert('사용자 등록에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(getApiUserData(loginData))
            if(!result.status) {
                alert('ID 또는 비밀번호를 잘못 입력하셨습니다. 확인 후 다시 시도해주세요.')
            } else {
                localStorage.setItem('userData', JSON.stringify({
                    userId: result.data.userId,
                    userName: result.data.userName,
                    auth: result.data.auth
                }));
                navigate('/notice');
            }
    }

    if (mod === false) {
        return (
            <div style={{height: '100vh', width: '100vw'}}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={{
                            paddingTop: 35,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                value={loginData.userId}
                                required
                                fullWidth
                                id="userId"
                                label="ID"
                                name="userId"
                                autoFocus
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                value={loginData.password}
                                fullWidth
                                id='password'
                                name="password"
                                label="Password"
                                type="password"
                                onChange={handleChange}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                </Grid>
                                <Grid item>
                                    <Button variant="body2" onClick={() => setMod(true)}>
                                        Sign Up
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </div>
        )
    } else {
        return (
            <div style={{height: '100vh', width: '100vw'}}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={{
                            paddingTop: 35,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <Box component="form" onSubmit={handleSubmitRegForm} noValidate sx={{mt: 1}}>
                            <TextField
                                value={regData.userId}
                                margin="normal"
                                required
                                fullWidth
                                id="userId"
                                label="ID"
                                name="userId"
                                autoFocus
                                onChange={handleChangeRegData}
                            />
                            <TextField
                                value={regData.userName}
                                margin="normal"
                                required
                                fullWidth
                                id='userName'
                                label="userName"
                                name="userName"
                                autoFocus
                                onChange={handleChangeRegData}
                            />
                            <TextField
                                value={regData.password}
                                margin="normal"
                                required
                                fullWidth
                                id='password'
                                name="password"
                                label="Password"
                                type="password"
                                onChange={handleChangeRegData}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                </Grid>
                                <Grid item>
                                    <Button variant="body2" onClick={() => setMod(false)}>
                                        Sign In
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </div>
        )
    }
}
export default LoginPage