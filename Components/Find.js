import Image from "next/image"
import 'tailwindcss/tailwind.css'
export default function Find() {
    return (
        <div className="w-full h-96">
            <div className="items-center flex flex-wrap  justify-center mx-auto ">
            <div className="relative w-screen items-center justify-center mx-auto text-center  mx-auto img__heading pt-20">
            <Image src="/images/malish.png" className="absolute w-4/3 " width={1000} height={300} />
                <h1 className="absolute w-1/2 h text-center text-lg align-middle ml-80 text-white -mt-48 ">If you find joy in using Mr. Masseurs, and feel you are genuienly benefiting from the connections you&apos;ve made, we remind you to please share your positive experience by writing honest reviews for our hard-working masseurs  </h1>
                </div>
        
            </div>
        </div>
    )
}
