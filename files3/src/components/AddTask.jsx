import * as Icon from 'react-bootstrap-icons';

const AddTask = () => {
    return (
        <div className="flex justify-center items-center ">
            <div className="card bg-base-100 shadow-xl p-2 w-full max-w-md m-12">
                <div className="card-body flex flex-row items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Enter task"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <button className="btn bg-blue-600 hover:bg-blue-800 text-white text-xl font-bold">
                        <Icon.PlusCircle />
                    </button>
                </div>
            </div>
        </div>
    );
};

export { AddTask };
