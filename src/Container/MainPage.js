import React from 'react';
import { Layout } from 'antd';
// import img from '../Image/main.jpg';
import main from '../img/main.jpg';
// import t from '../Component/About';
function MainPage(props) {
  const { Content } = Layout
  // , zIndex: 0
  return (
    <div style={{ position: "fixed", width: '100%', top: 0 }}>
      <Layout style={{ position: 'relative', maxHeight: 'none!important' }}>
        <Content style={{ padding: 0, display: 'block', backgroundSize: 'cover', backgroundPosition: '50% 50%' }}>
          <div style={{ height: '946px', padding: 0, display: 'block', backgroundColor: '#000', opacity: .3, top: 0, left: 0, width: '100%', position: 'absolute', backgroundImage: `url(${main})` }}>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: '100%', height: '100vh' }}>
            <h1 style={{ color: '#000', fontSize: '64px' }}>&#123; developer : 김남규 &#125;</h1>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default MainPage;