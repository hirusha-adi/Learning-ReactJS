const Header = () => {
    return (
        <>
            <div className="flex justify-center mt-4">
                <div className="w-4/5 rounded-lg border border-gray-300 shadow-lg">
                    <div className="navbar bg-base-100 rounded-3xl">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">Task Mate</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Link</a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export { Header }