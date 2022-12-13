import Container from "../styles/Container";
import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import {getTodos, postTodo} from "../lib/api";
import TodoItem from "../components/todo/TodoItem";
import TodoForm from "../components/todo/TodoForm";

function Todo() {
  const [todos, setTodos] = useState();
  useEffect(() => {
    refresh();
  }, []);
  const refresh = async () => {
    const resp = await getTodos();
    console.log(resp.data, "확인");
    setTodos(resp.data);
  };
  return (
    <Container>
      <h1>TODOLIST🚀</h1>
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
  /* border: 1px black solid; */
`;

export default Todo;
