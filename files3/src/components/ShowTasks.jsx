import { TaskCard } from './TaskCard';


const ShowTasks = () => {
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
                        <button className="btn btn-error btn-outline pt-0 pb-0">Clear All</button>
                    </div>
                </div>
                
                <hr />
                <div className=" grid grid-cols-1 gap-4 p-8 w-full md:grid-cols-3 ">
                    <TaskCard taskTxt="Task 1" timestamp="2:09:01 AM 9/14/2022" />
                    <TaskCard taskTxt="Task 1" timestamp="2:09:01 AM 9/14/2022" />
                    <TaskCard taskTxt="Task 1" timestamp="2:09:01 AM 9/14/2022" />
                    <TaskCard taskTxt="Task 1" timestamp="2:09:01 AM 9/14/2022" />
                </div>
            </div>
        </div>
    )
}

export { ShowTasks }