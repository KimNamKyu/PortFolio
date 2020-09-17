import React from 'react';
import { Layout, Divider } from 'antd';

function Skill(props) {
    const { Content } = Layout
    const data = [
        {
            id: 'Backend',
            list: ['csharp', 'java', 'net_Core', 'nodejs', 'python']
        },
        {
            id: 'Front',
            list: ['javascript', 'react']
        },
        {
            id: 'DevOps',
            list: ['postgreSQL', 'mariadb', 'ms-sql']
        },
    ]
    return (
        <Content style={{ height: '946px', background: '#fff', padding: "100px 50px 100px 50px", margin: '0 auto', width: '80%', position: 'relative' }}>
            <div id="skill" style={{ borderBottom: '2px dashed #e9e9e9' }}><h2 style={{ textAlign: 'center', fontSize: '38px' }}>Skill</h2></div>
            {data.map((item, key) =>
                <div style={{ width: '80%', margin: '0 auto'}}>
                    <Divider orientation="left"><h3>{item.id}</h3></Divider>
                    {item.list.map((name) =>
                        <div style={{position:'relative', float:'left', textAlign:'center'}}>
                            <img src={require(`../img/skill/${name}.png`)}  style={{width:'100px', height:'100px',  margin:'10px 50px 10px 50px', border: '1px dashed #e9e9e9', borderRadius: '15px',}}/>
                            <p>{name === 'csharp' ? 'C#' : name === 'net_Core' ? '. net Core' : name}</p>
                        </div>
                    )}
                </div>
            )}
        </Content>
    );
}

export default Skill;