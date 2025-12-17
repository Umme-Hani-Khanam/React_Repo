
import MessageCard from "./MyComponents/MessageCard";
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Message Cards</h2>

      <MessageCard
        title="Welcome"
        message="Welcome to our React application."
      />

      <MessageCard
        title="Update"
        message="New features have been added successfully."
      />

      <MessageCard
        title="Reminder"
        message="Don't forget to submit your assignment."
      />

      <MessageCard
        title="Success"
        message="You have completed the task correctly!"
      />
    </div>
  );
}

export default App;
