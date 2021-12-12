import Image from 'next/image';


function Homepage() {
    return (
        <div className="w-full flex flex-wrap h-screen bg-gray-900">
            <div className="flex flex-wrap">
                <div className="parent_div  px-24 py-24 pt-20 md:pt-20 lg:pt-44">
                    <div className="mb-8 mx-auto items-center">
                        <h2 className="text-1xl mb-2 text-white  font-medium md:text-2xl lg:text-3xl ">Find</h2>
                        <h1 className=" text-2xl text-white  mb-4 font-bold md:text-5xl lg:text-6xl"> Gay-Friendly male</h1>
                        <h1 className="text-2xl  text-white font-bold md:text-5xl lg:text-6xl ">Masseur near you</h1>
                    </div>

                    <div className="absolute w-2/5 pt-8  h-28 rounded-md border-2 bg-gray-50 mb-20 shadow ">
                        <div className="search__location">
                            {/* <TiLocation className="serach_icon text-gray-900  ml-12 text-3xl"/> */}
                        </div>
                        <div className="absolute headings text-sm pl-32 ">

                            <p className="text-gray-600 font-medium mb-5">city or postal code</p>
                            <div className="">
                                <p className="font-medium">Cadriff, USA</p>

                            </div>
                        </div>
                        <div className="btn text-center ">
                            <button className="w-32 h-12 rounded-md ml-44 bg-red-700 md:ml-64 lg:ml-96">Search</button>
                        </div>
                    </div>

                </div>

                <div className="ml-36">
                    <Image src="/images/rectangle.png" alt='ss' width={734} height={757} />
                </div>
            </div>
        </div>
    )
}


export default Homepage