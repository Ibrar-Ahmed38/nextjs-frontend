import Image from "next/image";

export default function Services() {
  return (<div className="container">

      <div className="flex flex-wrap  bg-gray-50">
      <div className="service bg-gray-50  ">
        <h1 className="text-center text-3xl pt-8  mb-8 font-bold">
          Why Messeur Choose Us
        </h1>

        <div className="flex  gap-x-8 gap-y-8  bg-gray-50 items-center justify-center mx-auto pl-4 flex-wrap">
          <div className="w-96 h-80  flex">
            <div className="bg-white rounded  overflow-hidden shadow-lg">
              <div className="card-1">
                <div className="text-center pt-8">
                  <Image
                    className=""
                    src="/images/3.png"
                    width={50}
                    height={60}
                    alt="Sunset in the mountains"
                  />
                </div>
                <div className="px-6 py-4 pt-4">
                  <div className="font-bold text-center text-1xl mb-2 ">
                    <h1>Affordable Ads</h1>
                  </div>
                  <p className="text-gray-700 text-base">
                    Fair monthly plans that won&apost ever rise in price. On
                    average, a messeur can cover the cost of his ad in less than
                    one hour. That what we call cha-ching
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-96 h-80  flex">
            <div className="bg-white rounded  overflow-hidden shadow-lg">
              <div className="card-1">
                <div className="text-center pt-8">
                  <Image
                    className=""
                    src="/images/2.png"
                    width={50}
                    height={60}
                    alt="Sunset in the mountains"
                  />
                </div>
                <div className="px-6 py-4 pt-4">
                  <div className="font-bold text-center text-1xl mb-2 ">
                    <h1>Effortless Platform</h1>
                  </div>
                  <p className="text-gray-700 text-base">
                    Fair monthly plans that won&apost ever rise in price. On
                    average, a messeur can cover the cost of his ad in less than
                    one hour. That what we call cha-ching
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-96 h-80   flex">
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
                  <div className="font-bold text-center text-1xl mb-2 ">
                    The Sweet Spot
                  </div>
                  <p className="text-gray-700 text-base">
                    Fair monthly plans that won&apost ever rise in price. On
                    average, a messeur can cover the cost of his ad in less than
                    one hour. That what we call cha-ching
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-96 h-80   flex mb-10">
            <div className="bg-white rounded  overflow-hidden shadow-lg">
              <div className="card-1">
                <div className="text-center pt-4">
                  <Image
                    className=""
                    src="/images/4.png"
                    width={50}
                    height={60}
                    alt="Sunset in the mountains"
                  />
                </div>
                <div className="px-6 py-4 pt-4">
                  <div className="font-bold text-center text-1xl mb-2 ">
                    <h1>Work & Travel</h1>
                  </div>
                  <p className="text-gray-700 text-base">
                    Fair monthly plans that won&apost ever rise in price. On
                    average, a messeur can cover the cost of his ad in less than
                    one hour. That what we call cha-ching
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-96 h-80   flex mb-10">
            <div className="bg-white rounded md:min-w-full overflow-hidden shadow-lg">
              <div className="card-1">
                <div className="text-center pt-8">
                  <Image
                    className=""
                    src="/images/5.png"
                    width={50}
                    height={60}
                    alt="Sunset in the mountains"
                  />
                </div>
                <div className="px-6 py-4 pt-4">
                  <div className="font-bold text-center text-1xl mb-2 ">
                    <h1>100% Satisfication Guarantee</h1>
                  </div>
                  <p className="text-gray-700  text-base">
                    Fair monthly plans that won&apost ever rise in price. On
                    average, a messeur can cover the cost of his ad in less than
                    one hour. That what we call cha-ching
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
