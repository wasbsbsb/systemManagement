import styles from './index.less';
import { ConfigProvider } from 'antd';
import zh_TW from 'antd/es/locale/zh_TW';
import moment from 'moment';

import Layout from './boxs';

moment.locale('zh_TW');
function BasicLayout(props) {
  return (
    <ConfigProvider locale={zh_TW}>
      <div className={styles.box}>
        <Layout />
      </div>
    </ConfigProvider>

  );
}

export default BasicLayout;
