import React from "react";

const students = [
  {
    id:1, //Warning: Each child in a list should have a unique "key" prop.에러 해결하기 위해 id와 key 입력해준다.
    name: "Inje",
  },
  {
    id:2,
    name: "Steve",
  },
  {
    id:3,
    name: "Bill",
  },
  {
    id:4,
    name: "Jeff",
  },
];

function AttendenceBook(props){
  return (
<ul>
      {students.map((student) => {     //배열을 렌더링하기위해 map함수를 사용

        //방법1)
        return <li key={student.id}>{student.name}</li>; //Check the render method of `AttendanceBook`. See https://reactjs.org/link/warning-keys for more information./ at li/ at AttendanceBook  li key추가
        
        //방법2) key를 포맷팅된 문자열로 변경
        //return <li key={`student-id-${student.id}`}>{student.name}</li>;
        
        //방법3) key를 index로 변경
        //{students.map((student, index) => {
        //return <li key={index}>{student.name}</li>;
        
      })}
    </ul>  );
}

export default AttendenceBook;