import Image from "next/image";
import 'tailwindcss/tailwind.css'

function Details() {
  return (
    <div className="flex pt-44 bg-white">
      <div className="w-4/5 h-80 b-2 items-center justify-center mx-auto shadow rounded-lg bg-gray-900 mb-8 ">
        <div className="flex px-10 pt-14 items-start">
          <div className="text-white font-medium">
            <h1 className="text-5xl ">Start Advertising Today!</h1>
            <p className="font-normal pt-6">
              Select a Plan thats right for you business
            </p>

            <div className="pt-8">
              <button className="text-red-700 bg-gray-100 w-40 h-14  font-bold rounded-md">Get Started</button>
            </div>
            <div className="images">
            <Image src="/images/design.png" alt="Somethingelse" className="" width={230} height={425} />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details