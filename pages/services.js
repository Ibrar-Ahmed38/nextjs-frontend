import "tailwindcss/tailwind.css";
import Image from "next/image";

const services = () => {
  return (
    <>
    <div className="service bg-gray-50 h-screen">
    <h1 className="text-center text-3xl pt-14  mb-14 font-bold">Why Messeur Choose Us</h1>
   
      <div className="flex gap-x-6 gap-y-4 pt-6 bg-gray-50 items-center justify-center mx-auto flex-wrap md:container md:mx-auto">
        <div className="w-80 h-72  flex">
          <div className="bg-white rounded  overflow-hidden shadow-lg">
            <div className="card-1">
              <div className="text-center pt-8">
                <Image
                  className=""
                  src="/images/1.png"
                  width={50}
                  height={60}
                  alt="Sunset in the mountains"
                />
              </div>
              <div className="px-6 py-4 pt-4">
                <div className="font-bold text-center text-xl mb-2 ">
                  Affordable Ads
                </div>
                <p className="text-gray-700 text-base">
                  Fair monthly plans that won't ever rise in price. On average,
                  a messeur can cover the cost of his ad in less than one hour.
                  That what we call cha-ching
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 h-72  flex">
          <div className="bg-white rounded  overflow-hidden shadow-lg">
            <div className="card-1">
              <div className="text-center pt-8">
                <Image
                  className=""
                  src="/images/1.png"
                  width={50}
                  height={60}
                  alt="Sunset in the mountains"
                />
              </div>
              <div className="px-6 py-4 pt-4">
                <div className="font-bold text-center text-xl mb-2 ">
                  Affordable Ads
                </div>
                <p className="text-gray-700 text-base">
                  Fair monthly plans that won't ever rise in price. On average,
                  a messeur can cover the cost of his ad in less than one hour.
                  That what we call cha-ching
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 h-72  flex">
          <div className="bg-white rounded  overflow-hidden shadow-lg">
            <div className="card-1">
              <div className="text-center pt-8">
                <Image
                  className=""
                  src="/images/1.png"
                  width={50}
                  height={60}
                  alt="Sunset in the mountains"
                />
              </div>
              <div className="px-6 py-4 pt-4">
                <div className="font-bold text-center text-xl mb-2 ">
                  PingPong
                </div>
                <p className="text-gray-700 text-base">
                  Fair monthly plans that won't ever rise in price. On average,
                  a messeur can cover the cost of his ad in less than one hour.
                  That what we call cha-ching
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 h-72  flex">
          <div className="bg-white rounded  overflow-hidden shadow-lg">
            <div className="card-1">
              <div className="text-center pt-8">
                <Image
                  className=""
                  src="/images/1.png"
                  width={50}
                  height={60}
                  alt="Sunset in the mountains"
                />
              </div>
              <div className="px-6 py-4 pt-4">
                <div className="font-bold text-center text-xl mb-2 ">
                  Affordable Ads
                </div>
                <p className="text-gray-700 text-base">
                  Fair monthly plans that won't ever rise in price. On average,
                  a messeur can cover the cost of his ad in less than one hour.
                  That what we call cha-ching
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 h-72  flex">
          <div className="bg-white rounded md:min-w-full overflow-hidden shadow-lg">
            <div className="card-1">
              <div className="text-center pt-8">
                <Image
                  className=""
                  src="/images/1.png"
                  width={50}
                  height={60}
                  alt="Sunset in the mountains"
                />
              </div>
              <div className="px-6 py-4 pt-4">
                <div className="font-bold text-center text-xl mb-2 ">
                  Affordable Ads
                </div>
                <p className="text-gray-700 text-base">
                  Fair monthly plans that won't ever rise in price. On average,
                  a messeur can cover the cost of his ad in less than one hour.
                  That what we call cha-ching
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>
    </>
  );
};

export default services;
