import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/tasks'

export const taskContext = createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
    }, [])

    function createTask(task) {
        setTasks([...tasks, {id: tasks.length, title: task.title, description: task.description}])
    }

    function deleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id))
    }

  return (
    <taskContext.Provider value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask,
    }}>
        {props.children}
    </taskContext.Provider>
  )
}
