import React from 'react'

const Homepage = () => {
    return (
        <div
        className="relative  overflow-hidden bg-gray-900  w-screen"
           style={{  height: "40rem" }}/>
      >
        <div className="absolute bg-gray-900 top-0 left-0 w-full">
          <div className="flex justify-between ">
            <div className="md:m-20 lg:m-20 text-white">
              <div className="skew_container "></div>
              <div className="absolute pt-20 top-10 left-10">
                <h1 className=" text-2xl text-white  mb-4 font-bold md:text-5xl lg:text-6xl">
                  FIND
                </h1>
                <h1 className=" text-2xl text-white  mb-4 font-bold md:text-5xl lg:text-6xl">
                  Gay-Friendly male
                </h1>
                <h1 className="text-2xl  text-white font-bold md:text-5xl lg:text-6xl ">
                  Masseur near you
                </h1>
                <div className="relative white__bar mt-10  h-28 rounded-md border-2 bg-gray-50 mb-20 shadow ">
                  <div className="search__location">
                    {/* <TiLocation className="serach_icon text-gray-900  ml-12 text-3xl"/> */}
                  </div>
                  <div className="absolute headings pt-8 text-sm pl-32 ">
                    <p className="text-gray-600 font-medium mb-5">
                      city or postal code
                    </p>
                    <div className="text-gray-600">
                      <p className="font-medium">Cadriff, USA</p>
                    </div>
                  </div>
                  <div className="pt-8 ml-40">
                    <button className="absolute btn w-32 h-12 rounded-md bg-red-700 md:ml-64 lg:ml-96">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img src="/images/rectangle.png" alt="ss" width="100%" />
            </div>
          </div>
        </div>
      
    );
  }
  
  export default Homepage;
