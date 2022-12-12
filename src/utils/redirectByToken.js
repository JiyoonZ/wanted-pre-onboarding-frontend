import React from "react";
import {Navigate, Redirect, Route} from "react-router-dom";
import {getToken} from "./authToken";

const redirectByToken = () => {
  const token = getToken();
  if (token) {
    Navigate("/todo");
  } else {
    Navigate("/");
  }
};

export default redirectByToken;
