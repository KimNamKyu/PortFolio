import React, { useState } from 'react';
import { Layout, Steps } from 'antd';

function About(props) {
    const { Content } = Layout
    const { Step } = Steps
    const step = [
        {
            title: '강원대학교',
            description: "2013/02 ~ 2019/02",
            subject: '강원대학교 컴퓨터공학과 졸업',
            content: '정보처리기사 취득 및 실시간 협업 안드로이드 어플리케이션 개발',
        },
        {
            title: '(주)한국동서발전',
            description: "2018/07 ~ 2018/08",
            subject: '(주)한국동서발전 인턴',
            content: '외부방문자를 위한 내선번호 안내시스템 개발'
        },
        {
            title: '응용 SW개발자 양성과정',
            description: "2018/09 ~ 2019/03",
            subject: '응용 SW개발자 양성과정 수료',
            content: ''
        },
        {
            title: '더존비즈온',
            description: "2019/04 ~ ",
            subject: '더존비즈온',
            content: 'WEHAGO 플랫폼 개발/운영',
        }
    ]
    const [current, setCurrent] = useState(3);

    return (
        <Content style={{ height: '946px', background: '#fff', padding: "100px 50px 100px 50px", margin: '0 auto', width: '80%' }}>
            <div style={{ borderBottom: '2px dashed #e9e9e9' }}><h2 style={{ textAlign: 'center', fontSize: '38px' }}>About</h2></div>
                <div style={{height:'250px', background:'blue', paddingTop: '50px' }}>
                    test
                </div>
            <div style={{ borderBottom: '2px dashed #e9e9e9' }}><h2 style={{ textAlign: 'center', fontSize: '38px' }}>Career</h2></div>
            <div>
                {/* <div style={{ position: 'absolute', float: 'left', width: '40%', padding: '50px 50px 50px 50px' }}> */}
                <div style={{ position: 'relative',  padding: '50px 50px 50px 50px' }}>
                    <Steps current={current} //direction="vertical"
                        onChange={(index) => { setCurrent(index) }}>
                        {step.map(item => (
                            <Step key={item.title} title={item.title} description={item.description} />
                        ))}
                    </Steps>
                </div>

                <div className="steps-content" style={{
                    marginTop: '50px',
                    border: '1px dashed #e9e9e9',
                    borderRadius: '2px',
                    backgroundColor: 'white',
                    minHeight: '300px',
                    textAlign: 'left',
                    padding: '50px 50px 50px 50px',
                    // float: 'right',
                    width: '50%',
                    fontSize: '16px'
                }}><span style={{fontSize:'18px'}}>{step[current].subject}</span><br />{step[current].content}</div>
            </div>
        </Content>
    );
}

export default About;

