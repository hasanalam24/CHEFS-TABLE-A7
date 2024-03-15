import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown flex justify-between">
                        <div className="flex items-center justify-between">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>

                            </div>
                            <div className="navbar-center">
                                <a className="btn btn-ghost text-3xl font-bold">Receipe Site</a>
                            </div>

                        </div>

                        <ul tabIndex={0} className="menu menu-lg dropdown-content z-[1] p-2 shadow bg-base-100 mt-12 rounded-box w-72">
                            <li><a>Homepage</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                </div>
                <ul className="hidden opacity-85 lg:flex gap-8 text-xl font-semibold ">
                    <li><a>Homepage</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                </ul>
                <div className="navbar-end">


                    <div className="hidden lg:inline">

                        <label className=" input input-bordered rounded-full bg-gray-100 flex items-center gap-2">
                            <CiSearch className="text-2xl"></CiSearch>
                            <input type="text" className="grow" placeholder="Search" />

                        </label>
                    </div>
                    <button className="btn btn-ghost btn-circle bg-[#0be58a] ml-3">

                        <CgProfile className="text-4xl"></CgProfile>


                    </button>

                </div>
            </div>
        </div>
    );
};

export default Header;