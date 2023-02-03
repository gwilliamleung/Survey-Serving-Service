
const NavBarAdmin = () => {
    return(
        <div>
            <header className="fixed w-full font-bold bg-zinc-900 z-0 p-2">
                <div className="mx-auto flex flex-row justify-around"> 
                    <p className="text-red-600">ADMIN VIEW</p>
                    <button>Log out</button>
                </div>
            </header>
        </div>
    )
}

export default NavBarAdmin