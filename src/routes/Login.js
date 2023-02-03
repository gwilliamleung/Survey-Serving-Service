const Login = () => {
    return(
        <div className="flex justify-center drop-shadow-lg rounded-md w-96 h-96 bg-custom-dark-gray">
            <span className="flex justify-center mt-3">Login:</span>
            <div className="mt-5">
                <div className="w-14 h-14 p-5">
                    <form>
                        <label>
                            Email
                            <input
                            name="emailOrUsername"
                            type="text"
                            />
                        </label>
                        <label>
                            Password
                            <input
                            name="password"
                            type="password"
                            />
                        </label>
                        <button type="submit" className="bg-custom-orange w-14 text-black">Log in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login