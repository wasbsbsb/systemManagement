import navcls from './navcls.less';
import { Component } from 'react';
import { Collapse } from 'antd';


const { Panel } = Collapse;

const text = [
  {
    index: '0',
    name: '个人主页',
    describe: '这是个人的一个主页',
    list: [{
      name: '钟林',
    }, {
      name: '钟林',
    }, {
      name: '钟林',
    }]
  },
  {
    index: '1',
    name: '个人相册',
    describe: '这是个人的一个相册',
    list: [{
      name: '钟林',
    }, {
      name: '钟林',
    }, {
      name: '钟林',
    }]
  }, {
    index: '2',
    name: '日志',
    describe: '这是个人的一个日志',
    list: [{
      name: '钟林',
    }, {
      name: '钟林',
    }, {
      name: '钟林',
    }]
  }, {
    index: '3',
    name: '记事本',
    describe: '这是个人的一个记事本',
    list: [{
      name: '钟林',
    }, {
      name: '钟林',
    }, {
      name: '钟林',
    },{
      name: '钟林',
    }]
  }
]

class Nav extends Component {
  render() {
    return (
      <div>
        <Collapse accordion className={navcls.navBox}>

          {
            text.map((item) => {
              return (
                <Panel header={item.name} key={item.index}>
                  <ul>
                    {
                      item.list.map((item, index) => {
                        return (
                          <li key={index}>{item.name}</li>
                        )
                      })
                    }
                  </ul>
                </Panel>
              )
            })
          }

        </Collapse>
      </div>
    )
  }
}

export default Nav;