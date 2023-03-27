import React, {useContext} from 'react'
import {taskContext} from '../context/TaskContext'

function TaskCard({task}) {

  const {deleteTask} = useContext(taskContext)


  function handleDelete() {
    alert("Eliminando tarea " + task.id)
    deleteTask(task.id)
  }

  return (  
        <div className='bg-gray-800 text-white p-4 rounded-md' >
            <h1 className='text-xl font-bold capitalize p-4' >{task.title}</h1>
            <p className='text-gray-500 text-sm' >{task.description}</p>
            <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400' onClick={handleDelete}>Eliminar</button>
        </div>
  ) 
}

export default TaskCard 