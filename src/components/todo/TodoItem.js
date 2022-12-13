import styled from "styled-components";
import {deleteTodo} from "../../lib/api";

function TodoItem({todo, refresh}) {
  const delHandler = async (id) => {
    const isDel = window.confirm("정말 삭제하시겠습니까?");
    if (isDel) {
      const resp = await deleteTodo(id);
      console.log(resp, "삭제");
      refresh();
    }
  };

  return (
    <>
      <TodoGroup>
        <TodoBox>{todo.todo}</TodoBox>
        <DelBtn
          onClick={() => {
            delHandler(todo.id);
          }}
        >
          삭제
        </DelBtn>
      </TodoGroup>
    </>
  );
}
const TodoGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const DelBtn = styled.div`
  background-color: ${(props) => props.theme.warnColor};
  font-size: 12px;
  height: 30px;
  width: 40px;
  color: white;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
`;
const TodoBox = styled.div`
  font-size: 14px;
  background-color: white;
  width: 300px;
  height: max-content;
  padding: 9px;
  margin: 10px 0;
  border-radius: 12px;
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7;
`;

export default TodoItem;
