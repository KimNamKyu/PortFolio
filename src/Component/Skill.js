import React from 'react';
import { Layout } from 'antd';

function Skill(props) {
    const { Content } = Layout
    return (
        <Content style={{ height: '946px', background: '#fff', padding: "100px 50px 100px 50px", margin: '0 auto', width: '80%' }}>
             <div style={{ borderBottom: '2px dashed #e9e9e9' }}><h2 style={{ textAlign: 'center', fontSize: '38px' }}>Skill</h2></div>
        </Content>
    );
}

export default Skill;