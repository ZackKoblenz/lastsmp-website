import React from "react"

function Navbar(){
    return(
        <>
        <div className="">
            <div>
                <ul className="flex text-red-400 space-x-4">
                    <li className="hover:translate-y-[-4px] "><a>Home</a></li>
                    <li className="hover:translate-y-[-4px] "><a>Players</a></li>
                    <li className="hover:translate-y-[-4px] "><a>Dynmap</a></li>
                    <li className="hover:translate-y-[-4px] "><a>Socials</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar