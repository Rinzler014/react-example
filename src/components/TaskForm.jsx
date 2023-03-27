import React from 'react'
import {useState, useContext} from 'react'
import { taskContext } from '../context/TaskContext'

function TaskForm() {
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const { createTask } = useContext(taskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(description)
        createTask({
            title,
            description
        })

        setTitle('')
        setDescription('')
    }

  return (
    <div className='max-w-md mx-auto'>
      <form className='bg-slate-800 p-10 mb-4  ' onSubmit={handleSubmit}>
        <h1 className='text-2xl font-bold text-white' >Crea tu Tarea</h1>
        <input 
        type="text" 
        placeholder='Escribe el titulo' 
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className='bg-slate-300 p-3 w-full mb-2'
        autoFocus
        />
        <textarea
        placeholder='Escribe la descripcion'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className='bg-slate-300 p-3 w-full mb-2'
        />
        
        <button className='bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-300' >Submit HomeWork</button>

      </form>
    </div>
  )
}

export default TaskForm