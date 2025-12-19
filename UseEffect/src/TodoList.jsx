import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

const TodosList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodos(data.slice(0, 15));
    };

    fetchTodos();

    // cleanup function
    return () => {
      alert("cleanup worked");
    };
  }, []);

  return (
    <div>
      <h2>Todos List</h2>

      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default TodosList;
