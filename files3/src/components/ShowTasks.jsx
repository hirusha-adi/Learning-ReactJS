import { TaskCard } from './TaskCard';


const ShowTasks = () => {
    return (
        <div className="flex justify-center items-center w-full">
            <div className="grid grid-cols-1 gap-4 p-2 w-full md:grid-cols-3">
                <TaskCard taskTxt="Task 1" timestamp="2:09:01 AM 9/14/2022" />
                <TaskCard taskTxt="Task 1" timestamp="2:09:01 AM 9/14/2022" />
                <TaskCard taskTxt="Task 1" timestamp="2:09:01 AM 9/14/2022" />
                <TaskCard taskTxt="Task 1" timestamp="2:09:01 AM 9/14/2022" />
                <TaskCard taskTxt="Task 1" timestamp="2:09:01 AM 9/14/2022" />
            </div>
        </div>
    )
}

export { ShowTasks }