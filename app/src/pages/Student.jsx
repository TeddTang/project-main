import React from "react";
import "../styles/style.scss";
import Sidebar from './Sidebar';
import DataList2 from './DataList2';


const student = () => {
    return(
        <div className="main">
        <Sidebar />
        <div className="main_container">
            <header>
                <p className="font32">學生管理</p>
            </header>
            <DataList2 />
            <div className="list_teacher">

            </div>
        </div>
    </div>
    )
}

export default student;
