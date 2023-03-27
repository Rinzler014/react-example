import TaskCard  from "./TaskCard"
import { useContext } from "react"
import { taskContext } from "../context/TaskContext"

function TaskList() {

  const { tasks } = useContext(taskContext)

    if (tasks.length === 0) {
        return <h1 className="text-white text-4xl font-bold text-center" >There is no HW</h1>
    }

  return (
    <div className="grid grid-cols-3 gap-2" >
        {tasks.map((task) => (
            
            <TaskCard key={task.id} task={task}/>

        ))}
    </div>
  );
}


export default TaskList