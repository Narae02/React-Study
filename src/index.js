import React from 'react';
// import ReactDOM from 'react-dom';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import ConfirmButtonFunction from './chapter_08/ConfirmButtonFunction';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';

// const root = ReactDOM.createRoot(document.getElementById('root'));

//chapter_03/Library
// ReactDOM.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//chapter_04/Clock
// setInterval(() =>{
//   ReactDOM.render(
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>,
//   document.getElementById('root')
//   );
// }, 1000);

//chapter_05/CommentList
  // ReactDOM.render(
  // <React.StrictMode>
  //   <CommentList />
  // </React.StrictMode>,
  // document.getElementById('root')
  // );

//chapter_06/NotificationList
  // ReactDOM.render(
  // <React.StrictMode>
  //   <NotificationList />
  // </React.StrictMode>,
  // document.getElementById('root')
  // );


  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(
  //   <React.StrictMode>
  //     <NotificationList />
  //   </React.StrictMode>
  // );


  //chapter_07/Accommodate
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(
  //   <React.StrictMode>
  //     <Accommodate />
  //   </React.StrictMode>
  // );

  //chapter_08/ConfirmButton
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(
  //   <React.StrictMode>
  //     <ConfirmButtonFunction />
  //   </React.StrictMode>
  // );

  //chapter_09/LandingPage
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(
  //   <React.StrictMode>
  //     <LandingPage />
  //   </React.StrictMode>
  // );

    //chapter_10/AttendanceBook
    //list와 key를 사용해서 출석부 컴포넌트 만들기
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(
    //   <React.StrictMode>
    //     <AttendanceBook />
    //   </React.StrictMode>
    // );

    //chapter_11/SignUp
    //form태그 사용하여 사용자 정보 입력 받기
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <SignUp />
      </React.StrictMode>
    );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
