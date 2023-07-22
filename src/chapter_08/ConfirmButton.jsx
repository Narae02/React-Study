import React from "react";

class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConfirmed: false,
    };
    // ************0. ConfirmButton Component
    // this.handleConfirm = this.handleConfirm.bind(this);

    // ************1. Class fields syntax 사용하기
    //1-1. 위의 bind코드 제거    
  }
  //************0. ConfirmButton Component
  // handleConfirm() {
  //   this.setState((prevState) => ({
  //     isConfirmed: !prevState.isConfirmed,
  //   }));
  // }

    // ************1. Class fields syntax 사용하기
    // 1-2. Arrow function으로 수정
  handleConfirm = () => {
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  }

  render() {
    return (
      <button 
        onClick={this.handleConfirm}
        disabled={this.state.isConfirmed}
        >
          {this.state.isConfirmed ? "확인됨" : "확인하기"}

      </button>
    );
  }
}

export default ConfirmButton;