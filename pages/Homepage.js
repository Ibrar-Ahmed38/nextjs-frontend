import Image from "next/image"
import { TiLocation } from 'react-icons/Ti';

export default function Homepage  (){
    return (
        <div className="w-full h-screen bg-gray-900">
            <div className="flex flex-wrap">
                <div className="parent_div  px-24 py-24 pt-40">
                    <div className="mb-12 mx-auto items-center">
                        <h2 className="text-3xl mb-2 text-white  font-medium ">Find</h2>
                        <h1 className=" text-6xl text-white  mb-4 font-bold"> Gay-Friendly male</h1>
                        <h1 className="text-6xl  text-white font-bold ">Masseur near you</h1>
                    </div>

                    
                        <div className="absolute w-2/4 h-28 rounded-md border-2 bg-gray-50 mb-20 shadow">
                        <div className="search__location">
                        <TiLocation className=" text-gray-900  ml-12 text-3xl"/>
                        </div>
                            <div className="absolute headings text-sm  pl-32 ">
                               
                                <p className="text-gray-600 font-medium mb-5">city or postal code</p>
                                <div className="">           
                                <p className="font-medium">Cadriff, USA</p>
                                   
                                </div>
                                
                            </div>
                            
                            <div className="btn text-center ">
                                <button className="w-32 h-12 rounded-md ml-96 bg-red-700">Search</button>
                            </div>
                        </div>
                    
                </div>

                <div className="child_div w-1/2 ml-3.5 ">
                    {/* <Image  src="/images/rectangle.png" width={720} height={620}/> */}
                </div>
            </div>
        </div>
    )
}


// export default Homepage