import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
// import About from "./components/About";

import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    const getTasks = async () => {

      const tasksFromServer = await
        fetchTasks();
      setTasks(tasksFromServer);

    }

    getTasks();

  }, []);

  // Fetch Tasks

  const fetchTasks = async () => {

    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();

    return data;

  }

  // Fetch Task

  const fetchTask = async (id) => {

    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await response.json();

    return data;

  }

  // Add Task

  const addTask = async (task) => {

    const response = await fetch("http://localhost:5000/tasks/", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task),
    })

    const data = await response.json();
    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);

  }

  // Delete Task

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })


    setTasks(tasks.filter(task => task.id !== id));
  }

  // Toggle reminder

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    console.log(taskToToggle);
    const update = { ...taskToToggle, reminder: !taskToToggle.reminder };
    console.log(update);

    // const response = await fetch(`http://localhost:5000/tasks/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-type": "application-json"
    //   },
    //   body: JSON.stringify(update),
    // })

    // const data = await response.json();

    setTasks(
      tasks.map(task => task.id === id ? { ...task, reminder: update.reminder } : task
      )
    );
  }

  return (

      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ("No Tasks to Show")}
        {/* <Route path="about" component={About} /> */}
        <Footer />
      </div>

  );
}

export default App;
