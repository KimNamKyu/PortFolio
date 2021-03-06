import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
function Header(props) {
  const { Header: Head } = Layout;

  let styles
  if(props.menuCss === 'menu'){
     styles = {
      menu: {overflow: 'hidden', width: '100%', height: '65px', position: 'absolute',transition: 'background 0.3s ease-in 0s', top: 0, background: 'rgba(255,255,255,0.0)'},
    }
  }else{
    styles = {
      menu_activate:{overflow:'visible', height: '65px', position: 'fixed', background: 'rgba(255, 255, 255, 0.9)', width:'100%', transition: 'background 0.3s ease-in 0s', top: 0}
    }
  }
  const [current, setCurrent] = useState(0);
  const onfocus = () => {
    // document.getElementById(value).scrollIntoView();
  }
  return (
    <Layout>
      {/* <Head style={{ width: '100%', height: '65px', position: 'absolute', zindex: '10000', transition: 'background 0.3s ease-in 0s', top: 0, background: 'rgba(255,255,255,0.0)' }} }}> */}
      <Head style={props.menuCss === 'menu' ? styles.menu : styles.menu_activate} >
        <GithubOutlined onClick={() => {
          window.open('https://github.com/KimNamKyu')
        }}
          style={{ fontSize: '24px', paddingRight: '30px' }} />
        <span style={{ fontSize: '24px' }}>Southkyu PortFolio</span>
        <Menu mode="horizontal" onClick={(index) => {
          if(index.key === 'item_0'){
            document.getElementById('home').scrollIntoView()
          }else if(index.key === 'item_1'){
            document.getElementById('about').scrollIntoView()
          }else if(index.key === 'item_2'){
            document.getElementById('skill').scrollIntoView()
          }else if(index.key === 'item_3'){
            document.getElementById('project').scrollIntoView()
          }
        }} style={{ float: 'right', borderBottom: '#fff', paddingLeft: '15px', background: 'rgba(255,255,255,0.0)', fontSize: '18px' }}>
          {['Home', 'About', 'Skill', 'Project'].map((item, index) => (
            <Menu.Item style={{ textDecoration: "underline" }} >{item}</Menu.Item>
          ))}
        </Menu>
      </Head>
    </Layout>
  );
}

export default Header;