import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="flex p-10">
        <h3 className="text-center text-3xl justify-center items-center mx-auto pt-10  font-bold">
          Popular Cities
        </h3>
      </div>

      <div className="flex p-14 gap-8 pt-14 mx-auto flex-wrap">
        <div className="flex-wrap">
          <div className="relative m-0">
            <Image
              src="/images/austin.png"
              alt="something"
              className="items-center justify-items-center mx-auto"
              width={330}
              height={230}
            />
          <div className="absolute top-24 text-center">
          <h1 className="text-white justify-center text-3xl ml-24">
              Austin
            </h1>
          </div>
          </div>
        </div>

        <div className="flex-wrap">
          <div className="relative m-0">
            <Image
              src="/images/dallas.png"
              alt="something"
              width={330}
              height={230}
            />
            <div className="absolute top-24 text-center">
          <h1 className="text-white justify-center text-3xl ml-24">
              Dallas
            </h1>
          </div>
          </div>
        </div>

        <div className="flex-wrap"> 
         <div className="relative m-0">
         <Image
            src="/images/houstin.png"
            alt="something"
            width={330}
            height={230}
          />
          <div className="absolute top-24 text-center">
          <h1 className="text-white justify-center text-3xl ml-24">
              Houstin
            </h1>
          </div>
        </div> 
          </div> 

        <div className="relative m-0">
        <div className="flex-wrap">
          <Image
            src="/images/losangelos.png"
            alt="something"
            width={330}
            height={230}
          />
           <div className="absolute top-24 text-center">
          <h1 className="text-white justify-center text-3xl ml-24">
              Los Angelos
            </h1>
          </div>
        </div>
        </div>
        

        <div className="flex-wrap">
          <div className="relative m-0">
          <Image
            src="/images/miami.png"
            alt="something"
            width={330}
            height={230}
          />
            <div className="absolute top-24 text-center">
          <h1 className="text-white justify-center text-3xl ml-24">
            Miami
          </h1>
          </div>
          </div>
          
        </div>

        <div className="flex-wrap">
          <div className="relative m-0">
          <Image
            src="/images/newyork.png"
            alt="something"
            width={330}
            height={230}
          />
             <div className="absolute top-24 text-center">
          <h1 className="text-white justify-center text-3xl ml-24">
            New York
          </h1>
          </div>
          </div>
          
        </div>
        <div className="flex-wrap">
          <div className="relative m-0">
          <Image
            src="/images/sandeigo.png"
            alt="something"
            width={330}
            height={230}
          />
          <div className="absolute top-24 text-center">
          <h1 className="text-white justify-center text-3xl ml-24">
            Sandeigo
          </h1>
          </div>
          </div>
         
        </div>

        <div className="flex-wrap">
          <div className="relative m-0">
          <Image
            src="/images/seatile.png"
            alt="something"
            width={330}
            height={230}
          />
          <div className="absolute top-24 text-center">
          <h1 className="text-white justify-center text-3xl ml-24">
            Seatile
          </h1>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
 