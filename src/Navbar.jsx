import { IoMdContact } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
<div className="w-[400px] m-auto lg:w-4/5 text-center text-4xl md:hidden lg:hidden py-5 ">
<h4 className=" lg:text-4xl hover:bg-white font-bold hover:text-green-500 text-center">Twirl & Taste</h4>
</div>

<div className="w-[90%]  lg:w-4/5 m-auto font-bold capitalize">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="hover:text-green-500" >Home</li>
                            <li className="hover:text-green-500" >Recipes</li>
                            <li className="hover:text-green-500" >About</li>
                            <li className="hover:text-green-500" >Search</li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost lg:text-4xl hover:bg-white hover:text-green-500 font-bold ">Twirl & Taste</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="  menu menu-horizontal space-x-5 px-1">
                        <li className="hover:text-green-500" >Home</li>
                        <li className="hover:text-green-500" >Recipes</li>
                        <li className="hover:text-green-500" >About</li>
                        <li className="hover:text-green-500" >Search</li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>

                        <div className=" lg:flex justify-between items-center bg-white px-6 py-3 rounded-full">

                            <div className="flex items-center gap-4 ">
                                
                                <input className="outline-none px-6 py-2 rounded-full bg-[#150B2B0D]" type="text" placeholder="Search" />
                               
                                <IoSearchSharp className=""></IoSearchSharp>
                            </div>
                            




                        </div>

                    </div>
                    <IoMdContact className="bg-slate-200 text-3xl rounded-full text-green-400"></IoMdContact>

                </div>
            </div>
            </div>
    
    </>
  );
};

export default Navbar;
