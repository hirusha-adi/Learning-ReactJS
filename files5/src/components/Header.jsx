
const Header = () => {

    return (
        <div className="max-w-7xl m-auto">
            <header className="h-28 sm:h-16 border-b" >
                <div className="flex flex-col sm:flex-row justify-between items-center py-2 mx-2">
                    <div className="flex items-center" >
                        <img className="w-12" src="https://placehold.co/100x100" alt="Logo" />
                        <span className="ml-2 text-2xl">My App</span>
                    </div>
                    <nav className="max-sm:my-3">
                        <span className="p-2 text-lg hover:bg-gray-100 hover:cursor-pointer hover: rounded">Home</span>
                        <span className="p-2 text-lg hover:bg-gray-100 hover:cursor-pointer hover: rounded">Products</span>
                        <span className="p-2 text-lg hover:bg-gray-100 hover:cursor-pointer hover: rounded">About Us</span>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export { Header }
