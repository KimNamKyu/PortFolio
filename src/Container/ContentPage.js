import React from 'react';
import { Layout } from 'antd';
import About from '../Component/About';
import Skill from '../Component/Skill';
import Project from '../Component/Project';
function ContentPage(props) {
    return (
        <div style={{ position: 'relative',background: '#fff', marginTop: '945px', paddingBottom: '54px'}}>
            <Layout style={{background:'white'}}>
                <About />
                <Skill />
                <Project />
            </Layout>
        </div>
    );
}

export default ContentPage;