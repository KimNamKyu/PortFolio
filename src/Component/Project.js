import React from 'react';
import { Layout, Image, Card, Tag, Avatar } from 'antd';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { GithubOutlined } from '@ant-design/icons';

function Project(props) {

    // const images = [
    //     img1,
    //     img2,
    //     img3
    // ]
    const images = [
        {
            pj: 'personpj',
            name: ['CLA1', 'CLA2', 'CLA3', 'CLA4', 'CLA5', 'CLA6', 'CLA7', 'CLA8', 'CLA9', 'CLA10', 'CLA11', 'CLA12', 'CLA13', 'CLA14', 'CLA15', 'CLA16', 'CLA17', 'CLA18', 'CLA19', 'CLA20'],
            content: '커뮤니티 웹사이트 로그분석 시스템 개발',
            tag: ['C#', '.Net Core WebAPI', 'Winform', 'HTML', 'CSS', 'Javascript', 'MS-SQL'],
            git: 'https://github.com/KimNamKyu/CLAS',
            text: 'Community Log Analisis System (커뮤니티 사이트 로그 분석 시스템)',
            term: '개발기간 :  2019.2.21 ~ 2019.3.21'
        },
        {
            pj: 'pospj',
            name: ['pos1', 'pos2', 'pos3', 'pos4', 'pos5', 'pos6', 'pos7', 'pos8', 'pos9', 'pos10', 'pos11'],
            content: 'Pos 프로그램 개발',
            tag: ['C#', 'Winform', '.Net Core WebAPI', 'MariaDB'],
            git: 'https://github.com/KimNamKyu/mojavePos',
            text: '팀프로젝트 Pos시스템개발( 주문 프로세스 개발, 메뉴 테이블 설계 및 공통모듈화 담당)',
            term: '개발기간 :  2018.11.20 ~ 2018.12.30'
        }
    ]

    // onClick={() => window.open(item.url)}
    const { Content } = Layout
    const { Meta } = Card
    return (
        <Content style={{ background: '#fff', padding: "100px 50px 100px 50px", margin: '0 auto', width: '80%' }}>
            <div style={{ borderBottom: '2px dashed #e9e9e9' }}><h2 style={{ textAlign: 'center', fontSize: '38px' }}>Project</h2></div>
            {/* <div style={{ position: 'relative', margin: '22px', paddingLeft: '20px', paddingRight: '40px', width: '50%' }}> */}
            {images.map((item, key) =>
                <div>
                    <Card title={item.content} headStyle={{fontSize:'20px'}} style={{ boxShadow: '5px 5px 5px 5px gray', margin: '22px', width: '100%'}} >
                        <Slide transitionDuration={1000} style={{ marginBottom: '50px' }}>
                            {item.name.map((name) =>
                                <div style={{ textAlign: 'center' }}>
                                    <Image src={require(`../img/${item.pj}/${name}.PNG`)} preview={false} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', showQuickJumper: false }} onClick={() => window.open(item.git)} />
                                </div>
                            )}
                        </Slide>
                        <Meta avatar={<GithubOutlined onClick={() => {window.open(item.git)}} />} title={item.text} description={item.term} style={{fontSize:'16px', marginBottom:'20px'}}/>
                        {item.tag.map(tag =><Tag>{tag}</Tag>)}
                    </Card>
                </div>
            )}
        </Content>
    );
}

export default Project;