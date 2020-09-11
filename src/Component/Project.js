import React from 'react';
import { Layout, Image } from 'antd';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from '../Image/logForm.png'
import img2 from '../Image/logWeb.png'
import img3 from '../Image/pos.png'
function Project(props) {

    // const images = [
    //     img1,
    //     img2,
    //     img3
    // ]
    const images = [
        {
            img: img1,
            url: "https://github.com/KimNamKyu/CLAS"
        },
        {
            img: img2,
            url: "https://github.com/KimNamKyu/CLAS"
        },
        {
            img: img3,
            url: "https://github.com/KimNamKyu/mojavePos"
        }
    ]

    const { Content } = Layout
    return (
        <Content style={{ height: '946px', background: '#fff', padding: "100px 50px 100px 50px", margin: '0 auto', width: '80%' }}>
            <div style={{ borderBottom: '2px dashed #e9e9e9' }}><h2 style={{ textAlign: 'center', fontSize: '38px' }}>Project</h2></div>
            <div style={{ position: 'relative', margin: '22px', paddingLeft: '20px', paddingRight: '40px', width: '100%' }}>
                <Slide transitionDuration={1000} style={{ boxShadow: '5px 5px 5px 5px gray' }}>
                    {images.map((item, key) =>
                        <div style={{ textAlign: 'center' }}>
                            <Image src={item.img} preview={false} onClick={() => window.open(item.url)} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', showQuickJumper: false }} />
                        </div>)}
                </Slide>
            </div>
        </Content>
    );
}

export default Project;