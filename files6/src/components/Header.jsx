import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {

    const navigate = useNavigate()
    const clsInactive = "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
    const clsActive = "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"

    const handleSubmit = (e) => {
        e.preventDefault()
        const queryTerm = e.target.query.value
        e.target.reset()

        return navigate(`/search?q=${queryTerm}`)
    }

    return (
        <Disclosure as="nav" className="bg-white shadow">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex px-2 lg:px-0">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src="https://placehold.co/200x200"
                                        alt="Logo"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src="https://placehold.co/200x200"
                                        alt="Logo"
                                    />
                                </div>
                                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => (isActive ? clsActive : clsInactive)}
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="/movies/popular"
                                        className={({ isActive }) => (isActive ? clsActive : clsInactive)}
                                    >
                                        Popular
                                    </NavLink>
                                    <NavLink
                                        to="/movies/top"
                                        className={({ isActive }) => (isActive ? clsActive : clsInactive)}
                                    >
                                        Top Rated
                                    </NavLink>
                                    <NavLink
                                        to="/movies/upcoming"
                                        className={({ isActive }) => (isActive ? clsActive : clsInactive)}
                                    >
                                        Upcoming
                                    </NavLink>
                                </div>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                                <div className="w-full max-w-lg lg:max-w-xs">
                                    <label htmlFor="query" className="sr-only">
                                        Search
                                    </label>
                                    <form onSubmit={handleSubmit}>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                            <input
                                                id="query"
                                                name="query"
                                                className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Search..."
                                                type="search"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="flex items-center lg:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="hidden lg:ml-4 lg:flex lg:items-center">
                                <button
                                    type="button"
                                    className="flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <ArrowPathIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden">
                        <div className="space-y-1 pt-2 pb-3">
                            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                            >
                                Home
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                            >
                                Popular
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                            >
                                Top Rated
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                            >
                                Upcoming
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
};

export { Header }