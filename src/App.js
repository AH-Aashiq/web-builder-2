import './App.css';
import { Layout, Menu, Input } from 'antd';
import { renderComponent } from './components/renderer';
import card from './config/card';
import conf from './config'
import React, { createElement, useEffect, useState } from 'react';

const { TextArea } = Input;
const { Header, Content, Sider } = Layout;

export const ConfigContext = React.createContext();
function App() {
  const [config, setConfig] = useState({});
  const [component, setComponent] = useState({});
  useEffect(() => {
    setConfig(card);
    const tempConf = { ...card };

    tempConf.children && delete tempConf.children;
    setComponent(tempConf);
  }, []);

  const selectLayer = (val) => {
    setConfig(conf);
  }

  return (
    <ConfigContext.Provider value={[component, setComponent]}>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Home</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={400} className="site-layout-background">
            <div className='bg-white h-100 p-4' style={{ borderRight: 0 }}>

              <h3 className='py-2'>Panel</h3>
              <div className='ps-2'>
                <div>
                  <label className='mb-1' htmlFor='content'>Content</label>
                  <TextArea
                    id='content'
                  // value={content}
                  // onChange={(val) => {
                  //   setContent(val.target.value)
                  // }}
                  />
                </div>

                <div className='my-3'>
                  <label className='mb-1' htmlFor='class'> CSS Class</label>
                  <Input
                    id='class'
                  // value={cl}
                  // onChange={(val) => {
                  //   setCl(val.target.value)
                  // }}
                  />
                </div>



              </div>
              <h3 className='mb-2'>Layouts</h3>
              <div className="ps-2">

                <div role="button"
                  className='row border border-5 my-2 p-3 d-flex justify-content-center align-items-center'
                // onClick={() => { selectLayer(1) }}
                >One Column</div>
                <div role="button" className='row my-3 '
                  onClick={() => { selectLayer(2) }}
                >
                  <div className="col-6 border border-5 p-3 d-flex justify-content-center align-items-center">Two Column</div>
                  <div className="col-6 border border-5 p-3 d-flex justify-content-center align-items-center">Two Column</div>
                </div>
                <div role="button" className="row my-2"
                // onClick={() => { selectLayer(3) }}
                >
                  <div className="col-4 border border-5 p-2 d-flex justify-content-center align-items-center">Three Column</div>
                  <div className="col-4 border border-5 p-2 d-flex justify-content-center align-items-center">Three Column</div>
                  <div className="col-4 border border-5 p-2 d-flex justify-content-center align-items-center">Three Column</div>
                </div>

              </div>
            </div>
          </Sider>
          <Layout>

            <Content
              style={{
                minHeight: "90vh",
              }}
            >
              {renderComponent(config)}
              {createElement('div', {
                onClick: () => {
                  console.log("Clicked")
                }
              }, "Click")}

            </Content>
          </Layout>
        </Layout>
      </Layout>
    </ConfigContext.Provider>
  );
}

export default App;
