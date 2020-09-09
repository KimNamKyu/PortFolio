import React from 'react';
import { Layout, Steps } from 'antd';

function MainPage(props) {
    const { Content } = Layout
    const { Step } = Steps
    const step = [
        {
            title: 'First',
            content: 'First-content',
        },
        {
            title: 'Second',
            content: 'Second-content',
        },
        {
            title: 'Last',
            content: 'Last-content',
        },
        {
            title: 'Last',
            content: 'Last-content',
        },
    ]
    return (
        <Content style={{ height: '946px', background: '#fff', padding: "100px 50px 100px 50px", margin: '0 auto', width: '80%' }}>
            <h2 style={{textAlign:'center', fontSize: '38px'}}>Career</h2>
            <Steps current={0}>
                {step.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>

            <div className="steps-content" style={{
                marginTop: '16px',
                border: '1px dashed #e9e9e9',
                borderradius: '2px',
                backgroundcolor: '#fafafa',
                minheight: '200px',
                textalign: 'center',
                paddingtop: '80px'
            }}>{step[0].content}</div>


        </Content>
    );
}

export default MainPage;

