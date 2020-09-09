import React from 'react';
import { Layout } from 'antd';
import img from '../Image/main.jpg'
function MainPage(props) {
  const { Content } = Layout
  return (
    <div style={{ position: "fixed", width: '100%', top: 0, zIndex: 0 }}>
      <Layout style={{ position: 'relative', maxHeight: 'none!important' }}>
        <Content style={{ padding: 0, display: 'block', backgroundSize: 'cover', backgroundPosition: '50% 50%' }}>
          <div style={{ height: '946px', padding: 0, display: 'block', backgroundColor: '#000', opacity: .3, top: 0, left: 0, width: '100%', position: 'absolute', backgroundImage: `url(${img})` }}>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default MainPage;