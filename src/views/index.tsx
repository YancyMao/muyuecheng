import {Layout} from 'antd';
import React from 'react';
import {Routes,Route,NavLink,Outlet} from 'react-router-dom'
const { Header, Content, Footer } = Layout;
const headerHeight:number = 48
const footerHeight:number = 30
const App: React.FC = () => (
  <Layout className="layout">
    <Header style={{color:'#fff',height:headerHeight+'px',display:'flex',justifyContent:'space-between'}}>
      <div className="logo" >
        <img src="" alt="" />
      </div>
      <div style={{width:'40%',cursor:'pointer',display:'flex',justifyContent:'space-between'}}>
        <NavLink to='home'>首页</NavLink>
        <NavLink to='blogs'>博客</NavLink>
        <NavLink to='bbs'>留言板</NavLink>
        <NavLink to='bbs'>GitHub</NavLink>
      </div>
    </Header>
    <Content style={{ height:'calc(100vh - '+(headerHeight+footerHeight)+'px)',overflowY:'auto'}}>
      <Outlet/>
    </Content>
    <Footer style={{ textAlign: 'center',fontSize:'12px',padding:'0',height:footerHeight+'px'}}>沐月城 个人博客 ©2022</Footer>
  </Layout>
);

export default App;