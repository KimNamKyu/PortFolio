import React from 'react';
import { Layout, Menu } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
function Header(props) {
  const { Header: Head } = Layout;

  return (
    <Layout>
      {/* <Head style={{ position: 'static', width: '100%', left: 0, top: 0, right: 0, zindex: 1000, background: '#fff', height:'65px' }}> */}
      <Head style={{ width: '100%', height: '65px', position: 'absolute', zindex: '10000', transition: 'background 0.3s ease-in 0s', top: 0, background: 'rgba(255,255,255,0.0)' }}>
        <GithubOutlined onClick={() => {
          window.open('https://github.com/KimNamKyu')
        }}
          style={{ fontSize: '24px', paddingRight: '30px' }} />
        <span style={{fontSize: '24px'}}>Southkyu PortFolio</span>
        <Menu mode="horizontal" style={{ float: 'right', borderBottom: '#fff', paddingLeft: '15px', background: 'rgba(255,255,255,0.0)', fontSize: '18px' }}>
          {['Home', 'About', 'Skill', 'Project'].map((item, index) => (
            <Menu.Item style={{textDecoration: "underline"}}>{item}</Menu.Item>
          ))}
        </Menu>
      </Head>
    </Layout>
  );
}

export default Header;