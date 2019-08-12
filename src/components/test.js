import dynamic from 'umi/dynamic';
// 异步加载组件;
const delay = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));
const App = dynamic({
  loader: async function () {
    let time = 3000;
    await delay(time);
    return () => <div>I will render after {time}s</div>;
  },
});

export default App;


