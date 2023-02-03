
const Auth = () => {
    return (
        <div className="drop-shadow-lg absolute top-1/4 rounded-md w-1/2 h-1/2 justify-center bg-custom-dark-gray">
            <span className="flex justify-center mt-3">Login or Signup:</span>
            <div className="mt-10 flex justify-center text-black">
                <button className="rounded-md bg-custom-orange w-2/12 m-1">Login Google</button>
                <button className="rounded-md bg-custom-orange w-2/12 m-1">Sign in Google</button>
            </div>
        </div>
    )
}

export default Auth