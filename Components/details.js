import Image from "next/image";
import 'tailwindcss/tailwind.css'

export default function Details() {
  return (
    <div className="flex pt-24 bg-white">
      <div className="w-4/5 h-80 b-2 items-center justify-center mx-auto shadow rounded-lg bg-gray-900 mb-8 ">
        <div className="flex px-10 pt-10 items-start md:pt-16 lg:pt-24">
          <div className="text-white">
            <h1 className="text-2xl md:text-3xl lg:text-5xl ">Start Advertising Today!</h1>
            <p className="font-normal pt-6">
              Select a Plan thats right for you business
            </p>

            <div className="pt-8">
              <button className="text-red-700 bg-gray-100 w-40 h-12 font-bold rounded-md">Get Started</button>
            </div>
          </div>

          <div className="images items-center justify-center  mx-auto md:-mt-32 lg:-mt-40 ml-64">
            <Image src="/images/design.png" alt="Somethingelse" className="pt-4" width={250} height={380} />
          </div>
        </div>
      </div>
    </div>
  );
}
