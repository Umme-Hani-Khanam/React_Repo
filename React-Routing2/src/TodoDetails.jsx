import { useParams } from "react-dom";
import { useEffect, useState } from "react";

const TodoDetails = () => {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [todoId]);

  if (!todo) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto" }}>
      <h2>Todo Details</h2>
      <p><strong>Title:</strong> {todo.title}</p>
      <p><strong>Status:</strong> {todo.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
};

export default TodoDetails;