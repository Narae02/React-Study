//ConfirmButton Component를 함수컴포넌트로 변경하기
import React, { useState } from "react";

function ConfirmButtonFunction(props) {
  const [isConfirmed, setIsConfirmde] = useState(false);

  const handleConfirm = () => {
    setIsConfirmde((prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인되었습니다." : "확인하겠습니다."}
    </button>
  );
}

export default ConfirmButtonFunction;