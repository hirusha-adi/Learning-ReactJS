import * as Icon from 'react-bootstrap-icons';
import Swal from 'sweetalert2'


const AddTask = ({ tasksList, setTasksList, task, setTask }) => {

    function handleSubmit(e) {
        e.preventDefault()

        const date = new Date();
        const value = e.target.task.value;
        if (!value) {
            Swal.fire({
                title: 'Error!',
                text: 'Please enter a task',
                icon: 'error',
                confirmButtonText: 'Close'
            })
            return
        }

        if (task.id) {
            const updatedTaskList = tasksList.map((todo) => (
                todo.id === task.id ? {
                    id: task.id,
                    name: value,
                    time: date.toLocaleString()
                } : todo
            ))
            setTasksList(updatedTaskList)
        }
        else {
            const newTask = {
                id: date.getTime(),
                name: value,
                time: date.toLocaleString()
            };
            setTasksList([...tasksList, newTask]);
        }

        setTask({})
    }

    return (
        <div className="flex justify-center items-center ">
            <div className="card bg-base-100 shadow-xl p-2 w-full max-w-md m-12">
                <form className="card-body flex flex-row items-center space-x-2" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter task"
                        className="input input-bordered w-full max-w-xs"
                        name='task' autoComplete='off'
                        value={task.name || ""}
                        onChange={(e) => setTask({ ...task, name: e.target.value })}
                    />
                    <button className="btn bg-blue-600 hover:bg-blue-800 text-white text-xl font-bold" type='submit'>
                        {task.id ? <Icon.Pencil /> : <Icon.PlusCircle />}
                    </button>
                </form>
            </div>
        </div>
    );
};

export { AddTask };
