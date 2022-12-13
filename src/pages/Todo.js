import Container from "../styles/Container";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {getTodos, postTodo} from "../lib/api";
function Todo() {
  const [todos, setTodos] = useState();
  const [newTodo, setNewTodo] = useState();
  useEffect(() => {
    refresh();
  }, []);
  const refresh = async () => {
    const resp = await getTodos();
    console.log(resp.data, "확인");
    setTodos(resp.data);
  };
  const changeHadler = (evt) => {
    const {
      target: {value},
    } = evt;
    console.log(value);
    setNewTodo(value);
  };

  const sumbitHandler = async (evt) => {
    evt.preventDefault();
    const resp = await postTodo(newTodo);
    console.log(resp);
    refresh();
  };
  return (
    <Container>
      <h1>TODOLIST🚀</h1>
      <Form onSubmit={sumbitHandler}>
        <TodoInput placeholder="Add task" onChange={changeHadler} />
        <AddBtn>add</AddBtn>
      </Form>
      {todos.map((ele) => (
        <div>{ele.todo}</div>
      ))}
    </Container>
  );
}

const Form = styled.form`
  width: 100%;
  padding: 20px 0;
`;
const TodoInput = styled.input`
  width: 270px;
  height: 30px;
  border: none;
  padding: 0 10px;
  margin-right: 10px;
`;
const AddBtn = styled.button`
  width: 60px;
  height: 30px;
  border: none;
  background-color: ${(props) => props.theme.accentColor};
  color: white;
`;
export default Todo;
