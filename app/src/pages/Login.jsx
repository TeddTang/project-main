import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/style.scss";
import showIcon from '../assets/show.svg';
import hideIcon from '../assets/hide.svg';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        // 在這裡處理登入邏輯，可以發送請求給伺服器等等
        console.log('Username:', username);
        console.log('Password:', password);
        // 清空輸入框
        setUsername('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='login_frame'>
                <div className='login'>
                    <section>
                        <p className='font36'>登入測驗系統</p>
                        <p className='font16_normal'>輸入帳號密碼來進行登入</p>
                    </section>
                    <div className='input'>
                        <label htmlFor="username">帳號</label>
                        <input
                        className='input_normal'
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder='請輸入帳號'
                        />
                    </div>
                    <div className='input_psw'>
                        <label htmlFor="password">密碼</label>
                        <div className='input_style'>
                            <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder='請輸入密碼'
                            />
                            <button type="button" onClick={toggleShowPassword}>
                                <img src={showPassword ? hideIcon : showIcon} alt={showPassword ? 'Hide' : 'Show'} />
                            </button>
                        </div>
                        
                    </div>
                    <div>
                        <Link to="/teacher">
                            <button className='button_fill' type="submit">登入</button>
                        </Link>
                    </div>
                </div>   
            </div>
        </form>
    )
};

export default Login;