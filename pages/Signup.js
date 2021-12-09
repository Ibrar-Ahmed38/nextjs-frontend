import "tailwindcss/tailwind.css";
export default function Home() {
    return (
        <>
        <div className="bg-gray-50">
            <div className="bg-red-700 h-52">
                <h1 className="text-center text-white text-2xl pt-8 ">Mrs MASSEUR</h1>
            </div>

            <div className="bg-gray-50 ">
                <div className="pt-14 flex  items-center  md:w-full rounded-md justify-center">
                    <div className="bg-white -mt-44  p-6 border-2 rounded shadow-2x w-10/12 md:w-4/12">
                        <h1 className="text-center text-2xl text-gray-400 mb-2">
                            Create an account
                        </h1>

                        <h1 className="text-center  text-3xl  mb-6">Sign Up Today</h1>
                        <div className="">
                            <form className="space-y-4  md:space-y-4 ">
                                <div>
                                    <label className="block">Select Account type</label>

                                    <input
                                        type="text"
                                        className="w-full outline-none h-10 bg-gray-50 border-blue-400"
                                        placeholder="I'm a messeur"
                                    />
                                </div>

                                <div>
                                    <label className="block">Email</label>
                                    <input
                                        type="text"
                                        className="w-full outline-none bg-gray-50 h-10  border-blue-400"
                                        placeholder="daniel.botsman@gmail.com"
                                    />
                                </div>

                                <div>
                                    <label className="block">Password</label>

                                    <input
                                        type="password"
                                        className="w-full outline-none h-10 bg-gray-50 border-blue-400"
                                        placeholder="******"
                                    />
                                </div>

                                <div>
                                    <label className="block">Confrim password</label>
                                    <input
                                        type="password"
                                        className="w-full outline-none h-10 bg-gray-50 border-blue-400"
                                        placeholder="******"
                                    />
                                </div>
                            </form>
                        </div>

                        <div className="pt-3">
                            <button className="block	w-3/4 items-center justify-center mx-auto text-white mt-2 bg-red-700 h-10 hover:bg-red-800">
                                Create an account
                            </button>
                        </div>

                        <h1 className="text-gray-500 mt-4 text-center">
                            Have an account?
                            <span className="font-bold text-red-700">Sign in</span>
                        </h1>
                    </div>
                </div>
            </div>
            </div>
        </>

    );
}
