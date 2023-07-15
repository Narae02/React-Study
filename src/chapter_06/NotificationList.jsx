import React from "react";
import Notification from "./Notification";

const reservedNotificaions = [
  {
    id: 1,
    message: "안녕하세요, 오늘 일정을 알려드립니다.",
  },
  {
    id:2,
    message: "점심식사 시간입니다.",
  },
  {
    id: 3,
    message: "이제 곧 미팅이 시작됩니다.",
  },
  {
    id: 4,
    message: "오늘 당신의 생일입니다.",
  },
  {
    id: 5,
    message: "오늘은 서울에 비가 내립니다. 우산을 챙기세요",
  },
  
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [], //리액트 컴포넌트의 state선언! 해당 컴포넌트에 사용할 state의 변수명 지정 
    };
  }

  componentDidMount() {
    const { notifications } = this.state; //여기서의 notifications는 컴포넌트의 state 값을 가져오기 위한 코드 **주의: 26째 줄에서 선언한 state의 이름을 그대로 사용**
    timer = setInterval(() => {
      if (notifications.length < reservedNotificaions.length) {
        const index = notifications.length;
        notifications.push(reservedNotificaions[index]);
        this.setState({ // this.setState() 함수로 state를 update하기
        //this.setState() 함수는 리액트 클래스 컴포넌트에서 state를 업데이트 하기 위해서 사용하는 함수
        //this.setState() 함수를 호출할 때, 내부에 업데이트 할 값이 들어있는 state객체를 넣어주기
          notifications: notifications,
        });
      }else {
        this.setState({  //setState사용해서 notifications 초기화해야 unmount 실행
          notifications: [], /// 왜? 기존에 렌더링 되어 있던 Notification 컴포넌트가 화면에서 사라지면서 unmount 되는 것 
          // 리액트 컴포넌트 트리에서 제거가 된다고 생각 -> 트리에 추가되는 과정이 mount, 제거되는 과정이 unmount
        });
        clearInterval(timer);
      }
    }, 1000);
  }
  componentWillUnmount() { //18버전 두개씩 한번에 나오는 버그 해결하기 위한 소스
    if (timer) {
      clearInterval(timer);
    }
  }
  
  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => { //state로부터 notifications 값을 가져오기 위해서는 this.state.notifications로 접근
          return (
            <Notification 
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;