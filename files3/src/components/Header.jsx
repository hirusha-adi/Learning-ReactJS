import { useState, useEffect } from 'react';


const Header = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.removeAttribute("class"); // to clear previous styles
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <>
            <div className="flex justify-center mt-4">
                <div className="w-4/5 rounded-lg border-gray-300">
                    <div className="navbar bg-base-100 rounded-3xl">
                        <div className="flex-1">
                            <a className="btn btn-ghost text-xl">Task Mate</a>
                        </div>
                        <div className="flex-none">
                            <ul className="menu menu-horizontal px-1">
                                <li>
                                    <details>
                                        <summary>Color Theme</summary>
                                        <ul className="bg-base-100 rounded-t-none p-2">
                                            {[
                                                ['light', 'Light'],
                                                ['dark', 'Dark'],
                                                ['purple', 'Purple'],
                                                ['blue', 'Blue'],
                                                ['green', 'Green']
                                            ].map(([t, n]) => (
                                                <li key={t}>
                                                    <a
                                                        onClick={() => setTheme(t)}
                                                        className={theme === t ? 'active' : ''}
                                                    >
                                                        {n}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Header }