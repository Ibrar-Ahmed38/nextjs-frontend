import Image from "next/image"
export default function Find() {
    return (
        <div className="w-full h-96">
            <div className="items-center  px-48  justify-center mx-auto">
            <div className="relative w-full text-center  mx-auto img__heading pt-20">
            <Image src="/images/malish.png" className="absolute" width={1000} height={300} />
                <h1 className="absolute w-4/6 text-center ml-32 text-white -mt-44">If you find joy in using Mr. Masseurs, and feel you are genuienly benefiting from the connections you&apos;ve made, we remind you to please share your positive experience by writing honest reviews for our hard-working masseurs  </h1>
                </div>
        

            </div>
        </div>
    )
}
