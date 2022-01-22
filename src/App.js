import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from "react"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors appointment',
      day: 'Feb 5th at 1:10pm',
      reminder: true
    },
    {
      id: 2,
      text: 'DoctorsDoctors appointment',
      day: 'Feb 5th at 2:20pm',
      reminder: true
    },
    {
      id: 3,
      text: 'DoctorsDoctorsDoctors appointment',
      day: 'Feb 5th at 3:30pm',
      reminder: false
    }
  ])

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
    <div className="container">
      {/* <h1>Hello {name}</h1> */}
      {/* <h1>Hello { x ? 'Yes' : 'No'}</h1> */}
      <Header title="Task tracker" showAdd={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} />

      {showAddTask ? <AddTask onAdd={addTask}></AddTask> : ''}

      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks>
        : 'No tasks to show'
      }
    </div>
  );
}

export default App;
