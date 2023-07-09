function MyButton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    'button',
    { onClick: () => setIsClicked(true) },
    isClicked ? 'Clicked!' : 'Click here!'
  )
}

//ReactDom에 render함수 사용해서 리액트컴포넌트를 돔 컴포넌트에 렌더링하는 함수
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);