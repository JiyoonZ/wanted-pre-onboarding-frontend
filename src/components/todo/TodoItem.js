import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {deleteTodo, updateTodo} from "../../lib/api";

function TodoItem({todo, refresh}) {
  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.todo);
  const [isChecked, setIsChecked] = useState(todo.isCompleted);
  const delHandler = async (id) => {
    const isDel = window.confirm("정말 삭제하시겠습니까?");
    if (isDel) {
      const resp = await deleteTodo(id);
      console.log(resp, "삭제");
      refresh();
    }
  };
  const editHandler = () => {
    setIsEdit((prev) => !prev);
  };
  const changeHandler = (evt) => {
    const {
      target: {value},
    } = evt;
    console.log(value);
    setEditTodo(value);
  };
  const submitEdidTodo = () => {
    setIsEdit((prev) => !prev);
  };
  const completeHandler = async () => {
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    updateApi();
  }, [isChecked]);

  const updateApi = async () => {
    await updateTodo(todo.id, editTodo, isChecked);
  };
  return (
    <>
      <TodoGroup>
        {isEdit ? (
          <>
            <TodoBox
              as="input"
              autoFocus={true}
              defaultValue={todo.todo}
              isEdit={true}
              onChange={changeHandler}
            />
            <EditBtn isEdit={true} onClick={submitEdidTodo}>
              확인
            </EditBtn>
            <DelBtn isEdit={true}>취소</DelBtn>
          </>
        ) : (
          <>
            <CheckBox
              type={"checkbox"}
              defaultChecked={isChecked}
              onChange={completeHandler}
            ></CheckBox>
            <TodoBox isEdit={false}>
              {isChecked ? <s>{todo.todo}</s> : todo.todo}
            </TodoBox>
            <EditBtn onClick={editHandler}>수정</EditBtn>
            <DelBtn
              onClick={() => {
                delHandler(todo.id);
              }}
            >
              삭제
            </DelBtn>
          </>
        )}
      </TodoGroup>
    </>
  );
}
const CheckBox = styled.input`
  width: 20px;
  height: 20px;
`;
const TodoGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DelBtn = styled.div`
  background-color: ${(props) =>
    props.isEdit ? "#EF9F9F" : props.theme.warnColor};
  font-size: 12px;
  height: 30px;
  width: 40px;
  color: white;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
`;
const EditBtn = styled(DelBtn)`
  background-color: ${(props) =>
    props.isEdit ? "#47B5FF" : props.theme.activeColor};
  margin-right: 5px;
`;
const TodoBox = styled.div`
  font-size: 14px;
  background-color: white;
  width: 300px;
  height: max-content;
  padding: 9px;
  margin: 10px 0;
  margin-right: 5px;
  border-radius: ${(props) => (props.isEdit ? 0 : "12px")};
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7;
  outline: none;
  border: none;
  s {
    font-style: italic;
  }
`;

export default TodoItem;
