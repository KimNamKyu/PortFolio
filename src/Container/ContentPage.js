import React from 'react';
import { Layout } from 'antd';
import About from '../Component/About';
function ContentPage(props) {
    const { Content } = Layout
    return (
        <div style={{ position: 'relative',background: '#fff', marginTop: '897px', paddingBottom: '54px' }}>
            <Layout>
                <About />
            </Layout>
        </div>
    );
}

export default ContentPage;