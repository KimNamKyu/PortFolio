import React from 'react';
import { Layout, Card, Image, Divider } from 'antd';

function Skill(props) {
    const { Content } = Layout
    const data = [
        {
            id: 'Backend',
            list: ['']
        },
        {
            id: 'Front',
            list: ['']
        },
        {
            id: 'DevOps',
            list: ['']
        },
    ]
    return (
        <Content style={{ height: '946px', background: '#fff', padding: "100px 50px 100px 50px", margin: '0 auto', width: '80%', position: 'relative' }}>
            <div style={{ borderBottom: '2px dashed #e9e9e9' }}><h2 style={{ textAlign: 'center', fontSize: '38px' }}>Skill</h2></div>
            {data.map((item, key) =>
                <div>
                    <Divider orientation="left">{item.id}</Divider>
                </div>
            )}
        </Content>
    );
}

export default Skill;