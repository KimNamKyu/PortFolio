import React, { useState } from 'react';
import { Layout, Steps, Divider, Popconfirm } from 'antd';
import Chart from './chart';
import { HistoryOutlined, LikeOutlined, UserOutlined } from '@ant-design/icons';
// import Popconfirm from './Popconfirm'
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
            content: '식당 Pos System 개발 / 웹사이트 로그 분석 시스템 개발'
        },
        {
            title: '더존비즈온',
            description: "2019/04 ~ ",
            subject: '더존비즈온',
            content: 'WEHAGO플랫폼 SPA 개발/운영 / SmartA 응용프로그램 개발',
        }
    ]
    const [current, setCurrent] = useState(3);

    return (
        <Content style={{ height: '946px', background: '#fff', padding: "100px 50px 100px 50px", margin: '0 auto', width: '80%' }}>
            <div id="about" style={{ borderBottom: '2px dashed #e9e9e9' }}><h2 style={{ textAlign: 'center', fontSize: '38px' }}>About</h2></div>
            <div style={{ height: '150px', padding: '10px 50px 0px 50px' }}>
                <Divider orientation="left" style={{ paddingRight: '50px' }}><h3> <UserOutlined style={{ paddingRight: '20px' }} />About Me </h3></Divider>
                <div style={{ padding: '5px 50px 5px 50px' }}>
                    <p>안녕하세요. 성장하고 싶은 개발자 김남규 입니다.</p>
                    {/* <p>주로 프로트엔드와 백엔드에 관심이 있습니다.</p> */}
                    {/* <p>안녕하세요. 저는 웹개발자 입니다.</p> */}
                    
                </div>
            </div>
            <div style={{ position: 'relative' }}>
                <div style={{ float: 'left', width: '50%', padding: '50px 50px 50px 50px' }}>
                    {/* <div style={{ position: 'relative',  padding: '50px 50px 20px 50px' }}> */}
                    <Divider orientation="left" style={{ paddingRight: '30px' }}> <h3> <HistoryOutlined style={{ paddingRight: '20px' }} />Career </h3></Divider>

                    <Steps size="small" current={current} direction="vertical"
                        onChange={(index) => {setCurrent(index)}}>
                        {step.map(item => (
                            <Step key={item.title} title={item.title} subTitle={item.description} description={item.content} style={{ paddingBottom: '50px', marginLeft: '30px' }} />//
                        ))}
                    </Steps>

                </div>

                <div className="steps-content" style={{
                    width: '50%',
                    marginTop: '0 auto',
                    backgroundColor: 'white',
                    padding: '50px 50px 50px 50px',
                    float: 'right',
                    fontSize: '16px'
                }}>
                    {/* <span style={{fontSize:'18px'}}>{step[current].subject}</span><br />{step[current].content} */}
                    <Divider orientation="left" style={{ paddingRight: '50px' }}><h3> <LikeOutlined style={{ paddingRight: '20px' }} />Development Skills </h3> </Divider>
                    <Chart />
                </div>
            </div>
        </Content>
    );
}

export default About;

