import Container from "../styles/Container";
import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import {getTodos, postTodo} from "../lib/api";
import TodoItem from "../components/todo/TodoItem";
import TodoForm from "../components/todo/TodoForm";
import * as C from "../components/auth/style";
import {removeToken} from "../utils/authToken";
import {useNavigate} from "react-router-dom";
function Todo() {
  const [todos, setTodos] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    refresh();
  }, []);
  const refresh = async () => {
    const resp = await getTodos();
    setTodos(resp.data);
  };
  const delTokenHandler = async () => {
    removeToken();
    navigate("/");
  };
  return (
    <Container>
      <Logout onClick={delTokenHandler}>로그아웃</Logout>
      <Title>Todo List</Title>
      <TodoForm refresh={refresh} />
      <TodoList>
        {todos &&
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} refresh={refresh} />
          ))}
      </TodoList>
    </Container>
  );
}

const TodoList = styled.div`
  height: 400px;
  overflow: auto;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;
const Logout = styled.p`
  font-size: 13px;
  text-align: end;
  color: ${(props) => props.theme.accentColor};
  text-decoration: underline;
  cursor: pointer;
`;
export default Todo;
