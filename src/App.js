import React, { useEffect, useRef } from 'react';
import Header from './Component/Header';
import "./App.css";
import 'antd/dist/antd.css';
import MainPage from './Container/MainPage';
import ContentPage from './Container/ContentPage';

function App() {
  const [scrollFlag, setScroll] = React.useState(false)
  const documentRef = useRef(document);

  const handelScroll = () => {
    const { pageYOffset } = window;

    if (pageYOffset > 964) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  useEffect(() => {
    documentRef.current.addEventListener('scroll', handelScroll);
    return () => documentRef.current.removeEventListener('scroll', handelScroll);
  }, [scrollFlag])



  let className = 'menu'
  if (scrollFlag) {
    className = 'menu_activate'
  } else {
    className = 'menu'
  }

  return (
    <div style={{ overflow: 'hidden' }} >
      <MainPage />
      <ContentPage />
      <Header menuCss={className} />
    </div>
  );
}

export default App;
