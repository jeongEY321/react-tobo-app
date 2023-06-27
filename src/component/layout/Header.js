import React, { useContext, useEffect, useState } from 'react'
import {AppBar, Toolbar, Grid, 
    Typography, Button} from "@mui/material";
import './header.css'
import { Link, useNavigate } from 'react-router-dom';

import { isLogin, getLoginUserInfo } from '../../util/login-utils';
import { AuthContext } from '../../util/AuthContext';

const Header = () => {
    const redirection = useNavigate();

    // const [userInfo, setUserInfo] = useState({});

    // const { token, username, role } = userInfo;

    //AuthContext에서 로그인 상태와 onLogout 함수를 가져오기
    const {isLoggedIn, onLogout, userName} = useContext(AuthContext);

    //로그아웃 핸들러
    const logoutHandler = e => {
        // AuthContext의 onLogout 함수를 호출하여 로그인 상태를 업데이트한다.
        onLogout();
        redirection('/login');
    }

    // 무한루프작동하여 주석처리.
    // useEffect(() => {
    //     setUserInfo(getLoginUserInfo());
    // }, [userInfo]);

    return (
        <AppBar position="fixed" style={{
            background: '#38d9a9',
            width: '100%'
        }}>
            <Toolbar>
                <Grid justify="space-between" container>
                    <Grid item flex={9}>
                        <div style={
                            {
                                display:'flex',
                                alignItems: 'center'
                            }
                        }>
                            <Typography variant="h4">
                                {
                                    isLoggedIn ? userName + '님' : '오늘'
                                }
                                의 할일
                            </Typography>   
                        </div>
                    </Grid>

                    <Grid item>
                        <div className='btn-group'>
                            {
                                isLogin() ? (
                                            <button className='logout-btn' onClick={logoutHandler}>
                                                로그아웃
                                            </button>
                                        ) : (
                                            <>
                                                <Link to='/login'>로그인</Link>
                                                <Link to='/join'>회원가입</Link>
                                            </>
                                        )
                            }
                        </div>
                    </Grid>

    
                </Grid>
            </Toolbar>
        </AppBar>
      );
}

export default Header;