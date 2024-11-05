import { TaskCard } from './TaskCard';

const ShowTasks = ({ tasksList, setTasksList, task, setTask }) => {

    function deleteAllTasks() {
        setTasksList([])
    }

    function deleteOneTask(id) {
        setTasksList(tasksList.filter((task) => task.id !== id))
    }

    function editTask(id) {
        const selectedTask = tasksList.filter(todo => todo.id === id)[0]
        setTask(selectedTask)
    }

    return (
        <div className="flex justify-center items-center w-full">
            <div className="card bg-white shadow-xl w-full p-8">
                <div className="row pb-6 center">
                    <div className="col-10">
                        <h2 className='text-3xl font-bold pt-3 pl-3'>
                            All Tasks
                        </h2>
                    </div>
                    <div className="col-2 text-right pr-5">
                        <button className="btn btn-error btn-outline pt-0 pb-0" onClick={deleteAllTasks}>Clear All</button>
                    </div>
                </div>

                <hr />
                <div className=" grid grid-cols-1 gap-4 p-8 w-full md:grid-cols-3 ">
                    {tasksList.length === 0 ? (
                        <h2 className="text-2xl font-bold">No tasks found</h2>
                    ) : (
                        tasksList.map((task) => (
                            <TaskCard
                                key={task.id}
                                taskId={task.id}
                                taskTxt={task.name}
                                timestamp={task.time}
                                deleteOneTask={deleteOneTask}
                                editTask={editTask}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export { ShowTasks }