
const Card = () => {
    return (
        <>
            <div className="max-w-sm border rounded-2xl p-3 hover:cursor-pointer m-2">
                <img className="rounded" src="https://placehold.co/500x600" alt="Product" />
                <h1 className="text-2xl mb-3 mt-5">Sony 123</h1>
                <p className="pt-2 border-t">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolore quis ratione iste!</p>
                <button
                    type="button"
                    className="inline-flex items-center px-3 py-1.5 mt-5 mb-2 border border-transparent text-xs font-medium rounded-xl shadow-sm text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Read More
                </button>
            </div>
        </>
    );
};

export { Card }