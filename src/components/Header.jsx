import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
	const path = useLocation();
	const [toggle, setToggle] = useState("hidden");

	return (
		<nav className="poppins bg-black/70 absolute top-0 left-0 w-full z-50 backdrop-blur-sm">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">

					{/* Mobile menu button */}
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						<button onClick={() => setToggle(toggle === "hidden" ? "block" : "hidden")} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-50 hover:bg-gray-200 hover:text-black focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset border">
							<svg className={`${toggle === "hidden" ? "block" : "hidden"} size-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
							</svg>
							<svg className={`${toggle === "hidden" ? "hidden" : "block"} size-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
							</svg>
						</button>
					</div>

					{/* Logo and nav links */}
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<Link to="/" className="flex shrink-0 items-center">
							<img className="w-full h-10" src="https://i.ibb.co/YB04cMcW/food-logo-with-smile-spoon-fork-delicious-food-design-illustration-tongue-saliva-207371-61-removebg.png" alt="Logo" />
						</Link>
						<div className="hidden sm:ml-6 sm:block">
							<div className="flex space-x-4">
								<Link to="/" className={`${path.pathname === "/" ? "text-white" : "text-gray-300"} px-3 py-3 text-[16px] font-medium hover:text-white`}>Home</Link>
								<Link to="/projects" className={`${path.pathname === "/projects" ? "text-white" : "text-gray-300"} px-3 py-3 text-[16px] font-medium hover:text-white`}>Projects</Link>
							</div>
						</div>
					</div>

					{/* Profile avatar */}
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<div className="relative ml-3">
							<button type="button" className="relative flex rounded-full bg-orange-600 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600 focus:outline-none">
								<img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" />
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			<div className={`${toggle} sm:hidden`} id="mobile-menu">
				<div className="space-y-2 px-2 pt-2 pb-3">
					<Link to="/" className={`${path.pathname === "/" ? "bg-gray-200 text-black" : "bg-transparent hover:bg-gray-500/50 text-white"} block rounded-md px-3 py-2 text-base font-medium`}>Home</Link>
					<Link to="/projects" className={`${path.pathname === "/projects" ? "bg-gray-200 text-black" : "bg-transparent text-white hover:bg-gray-500/50"} block rounded-md px-3 py-2 text-base font-medium`}>Projects</Link>
				</div>
			</div>
		</nav>
	);
};

export default Header;
