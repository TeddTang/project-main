import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import teacher_enable from '../assets/ic_teacher_enable.svg' ;
import teacher from '../assets/ic_teacher.svg' ;
import student_enable from '../assets/ic_student_enable.svg' ;
import student from '../assets/ic_student.svg' ;
import logout from '../assets/ic_logout.svg' ;
import "../styles/style.scss";


const Sidebar = () => {

    const location = useLocation();
    const [selectedPage, setSelectedPage] = useState('');

     // 根據當前選中的頁面
    React.useEffect(() => {
        const path = location.pathname.substring(1); // 移除開頭的 '/'
        setSelectedPage(path);
    }, [location.pathname]);

    return(
    <div>
        <div className="bar__side">
            <p className="font24">測驗系統</p>
            <section className='bar__side_main'>
            <ul>
                <li className={selectedPage === 'teacher' ? 'active' : ''}><Link to="/teacher">
                    <img src={selectedPage === 'teacher' ? teacher_enable : teacher} alt="" />
                    教師管理</Link>
                </li>
                <li className={selectedPage === 'student' ? 'active' : ''}><Link to="/student">
                    <img src={selectedPage === 'student' ? student_enable : student} alt="" />
                    學生管理</Link>
                </li>
                
            </ul>
            <ul>
            <li className='logout'><Link to="/login">
                    <img src={logout}/>
                    登出</Link>
                </li>
            </ul>
            </section>
        </div>
    </div>
    );
};

export default Sidebar;