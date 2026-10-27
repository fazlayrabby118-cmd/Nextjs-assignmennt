'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";




const Navbar = () => {
    const pathName = usePathname();


    const links = <>
        <li><Link className={pathName === '/home' ? 'bg-green-900 text-white' : ''} href="/home"> <Image
            src="/home.png"
            alt="Home icon"

            width={24}
            height={24}>

        </Image> Home</Link></li>
        <li><Link className={pathName === '/timeline' ? 'bg-green-900 text-white' : ''} href="/timeline">
            <Image
                src="/Clock.png"
                alt="Home icon"

                width={24}
                height={24}>

            </Image>
            Timeline</Link></li>
        <li><Link className={pathName === '/stats' ? 'bg-green-900 text-white' : ''} href="/stats">
            <Image
                src="/Vector.png"
                alt="Home icon"

                width={24}
                height={24}>

            </Image>
            Stats</Link></li>

    </>

    return (
        <div className="navbar px-20  lg:flex justify-between  shadow-sm">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className=" text-2xl font-bold text-green-950 ">Keen<span className="text-green-900 font-medium">Keeper</span></a>
            </div>
            <div className="navbar-center  hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;