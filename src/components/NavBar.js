import { BiUserCircle } from "react-icons/bi"

const NavBar = ({ showProfile, profileClickHandler}) => {
    return(
        <div>
            <header className="fixed w-full font-bold bg-custom-dark-gray z-0 p-2">
                <div className="mx-auto flex flex-row justify-around"> 
                    <p className="text-red-600">ADMIN VIEW</p>
                    <button className="text-xl" onClick={ profileClickHandler }><BiUserCircle/></button>
                </div>
            </header>
        </div>
    )
}

export default NavBar