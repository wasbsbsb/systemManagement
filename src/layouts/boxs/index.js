import cls from './box.less';
import { Component } from 'react';
import { Layout } from 'antd';
import Nav from './../../components/Nav';


const { Header, Footer, Sider, Content } = Layout;

class Box extends Component {
  render() {
    return (
      <div className={cls.box2}>
        <Layout className={cls.box2}>
          <Header className={cls.Header}></Header>
          <Layout className={cls.Content}>
            <Sider className={cls.Sider}>
              <Nav />
            </Sider>
            <Content>

            </Content>
          </Layout>
          <Footer className={cls.footer}>Footer</Footer>
        </Layout>
      </div>
    )
  }
}

export default Box;
