import React from 'react';
import "../styles/style.scss";
import Delete from '../assets/ic_delete.svg';
import Edit from '../assets/ic_edit.svg';

const DataList = () => {
    
const dataList = [
    { id: 1, name: 'name', data: 'Data 1' },
    { id: 2, name: 'name', data: 'Data 2' },
    { id: 3, name: 'name', data: 'Data 3456' },
    { id: 4, name: 'name', data: 'Data 3456' },
];

return (
    <div className='list'>
        <ul>
            <li className="list_header">
                <span className='font16_medium'>學生名稱</span>
                <span className='font16_medium'>其他資料</span>
            </li>
            {dataList.map(item => (
                <li className='list_context' key={item.id}>
                    <section>
                        <span className='font16_normal'>{item.name}</span>
                        <span className='font16_normal'>{item.data}</span>
                    </section>
                    <section>
                        <img src={Edit} alt="" />
                        <img src={Delete} alt="" />
                    </section>
                </li>
            ))}
        </ul>
    </div>
    );
};

export default DataList;
