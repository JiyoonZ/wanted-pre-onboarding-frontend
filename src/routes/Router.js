import {Routes, Route} from "react-router-dom";
import Auth from "../pages/Auth";
import Todo from "../pages/Todo";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Auth />
          </PublicRoute>
        }
      />
      <Route
        path="/todo"
        element={
          <PrivateRoute>
            <Todo />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
