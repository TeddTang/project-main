import React from "react";
import "../styles/style.scss";
import Sidebar from './Sidebar';
import DataList from './DataList';


const teacher = () => {
    return(
    <div className="main">
        <Sidebar />
        <div className="main_container">
            <div className="data_header">
                <p className="font32">教師管理</p>
                <button>新增教師</button>
            </div>
            <DataList />
            <div className="list_teacher">

            </div>
        </div>
    </div>
    )
}

export default teacher;
