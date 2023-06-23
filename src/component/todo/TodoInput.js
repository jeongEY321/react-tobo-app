import React, {useState} from 'react'
import { MdAdd } from 'react-icons/md'
import cn from 'classnames'

import './scss/TodoInput.scss';

const TodoInput = ({ addTodo }) => {

  //입력창이 열리는 여부를 표현하는 상태값
  const[open, setOpen] =  useState(false);

  //할 일 입력창에 입력한 내용을 표현하는 상태값
  const [todoText, setTodoText] = useState('');

  //+버튼 클릭시 이벤트 처리
  const onToggle = () => {
    //open = !open; //이렇게 작성 x

    setOpen(!open); //계속 값이 반전되어 리턴
  }

  //submit 이벤트 핸들러
  const submitHandler = e => {
    e.preventDefault();
    //console.log('폼이 제출됨!!');
    //console.log(todoText);
    addTodo(todoText);

    //입력이 끝나면 입력창 비우기
    setTodoText('');
  }

  //input change 이베트 핸들러 함수
  const todoChangeHandler = e => {
    //console.log(e.target.value);
    setTodoText(e.target.value);
  }

  // const showForm = () =>{
  //   //두 값이 모두 참일때만 반환 (우항은 Truthy 그러므로 왼쪽의 참거짓 여부에 따라 return발동이 제약)
  //   return 
  // }

  return (
     <>
        {
          open && (<div className='form-wrapper'>
            <form className='insert-form' onSubmit={submitHandler}>
              <input type='text' placeholder='할 일을 입력 후, 엔터를 누르세요!' onChange={todoChangeHandler} value={todoText}/>
            </form>
          </div>)
        }

        {/* 
            cn() : 첫번째 파라미터는 항상 유지할 default 클래스
                    두번째 파라미터는 논리 상태값
                    => 논리 상태값이 true일 경우 해당 클래스 추가
                        false일 경우 제거.
                        {클래스이름: 논리값}, 클래스 이름 지정 안할 시 변수명이 클래스 이름으로 사용됨.
        */}
      <button className={cn('insert-btn', {open})} onClick={onToggle}>
         <MdAdd />
      </button>
    </>
  )
}

export default TodoInput;