import React from 'react';
import Header from './Component/Header';
import "./App.css";
import 'antd/dist/antd.css';
import MainPage from './Container/MainPage';
import ContentPage from './Container/ContentPage';
function App() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <MainPage />
      <Header />
      <ContentPage />
    </div>
  );
}

export default App;
