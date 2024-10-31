const TaskCard = ({task, handleDelete}) => {
    return (
        <>
            <li>
                <span>{task.id} - {task.name} - {task.completed ? "Completed" : "Not Completed"}</span>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
        </>
    )
}

export { TaskCard }
