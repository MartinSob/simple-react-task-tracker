import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
import { useState, useEffect } from "react"
import jsonTasks from './db.json'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  const fetchTasks = async () => {
    // const res = await fetch('task-endpoint')
    // const data = await res.json()
    const data = jsonTasks.tasks

    return data;
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    console.log('toggleReminder', id);
    setTasks(tasks.map(task => (
      task.id === id ? { ...task, reminder: !task.reminder } : task
    )))
  }

  return (
    <Router>
      <div className="container">
        {/* <h1>Hello {name}</h1> */}
        {/* <h1>Hello { x ? 'Yes' : 'No'}</h1> */}
        <Header title="Task tracker" showAdd={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} />

        <Routes>
          <Route path='/' exact element={
            <>
              {showAddTask ? <AddTask onAdd={addTask}></AddTask> : ''}

              {tasks.length > 0 ?
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks>
                : 'No tasks to show'
              }
            </>
          }></Route>

          <Route path='/about' element={<About></About>}></Route>
        </Routes>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
