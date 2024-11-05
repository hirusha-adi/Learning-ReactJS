import * as Icon from 'react-bootstrap-icons';
import PropTypes from 'prop-types';

const TaskCard = ({ taskId, taskTxt, timestamp, deleteOneTask }) => {

    return (
        <div className="card bg-base-100 shadow-md border-l-4 border-blue-500 p-4 flex justify-between m-1">
            <div className="row">
                <div className="col-8 text-sm text-gray-500">
                    {timestamp}
                </div>
                <div className="col-4 text-right text-base">
                    <div className="col inline-block mr-5">
                        <button className="text-blue-500 hover:text-blue-700">
                            <Icon.Pencil />
                        </button>
                    </div>
                    <div className="col inline-block mr-3">
                        <button className="text-red-500 hover:text-red-700" onClick={() => deleteOneTask(taskId)}>
                            <Icon.Trash />
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <h2 className="font-semibold text-lg">{taskTxt}</h2>
            </div>
        </div>
    )
}

TaskCard.propTypes = {
    taskTxt: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
}

export { TaskCard }