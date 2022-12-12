import axios from "./axios";

export const Signin = async (values) => {
  const response = await axios.post(`/auth/signin`, values);

  return response;
};

export const Signup = async (values) => {
  const response = await axios.post(`/auth/signup`, values);

  return response;
};

export const getTodos = async () => {
  const response = await axios.get("/todos");

  return response;
};

export const postTodo = async (todoText) => {
  const response = await axios.post("/todos", {
    todo: todoText,
  });

  return response;
};

export const editTodo = async ({id, prevTodo, newTodo, isChecked}) => {
  const response = await axios.put(`/todos/${id}`, {
    todo: newTodo ? newTodo : prevTodo,
    isCompleted: isChecked,
  });

  return response;
};

export const deleteTodo = async (id) => {
  const response = await axios.delete(`/todos/${id}`);

  return response;
};
