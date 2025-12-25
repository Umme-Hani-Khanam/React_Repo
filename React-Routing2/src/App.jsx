import { BrowserRouter, Routes, Route } from "react-dom";
import Login from "./Login";
import Todos from "./Todos";
import TodoDetails from "./TodoDetails";

import Auth from "./Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/todos"
          element={
            <Auth>
              <Todos />
            </Auth>
          }
        />

        <Route
          path="/todos/:todoId"
          element={
            <Auth>
              <TodoDetails />
            </Auth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
