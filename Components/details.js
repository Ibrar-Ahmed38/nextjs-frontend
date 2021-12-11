import Image from "next/image";

export default function Details() {
  return (
    <div className="flex pt-24 bg-white">
      <div className="w-4/5 h-80 b-2 items-center justify-center mx-auto shadow rounded-lg bg-gray-900 mb-8 ">
        <div className="flex px-10 pt-24 items-start">
          <div className="text-white">
            <h1 className="text-5xl ">Start Advertising Today!</h1>
            <p className="font-normal pt-6">
              Select a Plan thats right for you business
            </p>

            <div className="pt-8">
              <button className="text-red-700 bg-gray-100 w-40 h-12 font-bold rounded-md">Get Started</button>
            </div>
          </div>

          <div className="images items-center justify-center mx-auto -mt-36">
            <Image src="/images/design.png" width={250} height={370} />
          </div>
        </div>
      </div>
    </div>
  );
}
