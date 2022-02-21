import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] shadow-md ">
      <Image src="/hero.jpg" layout="fill" objectFit="cover" alt="hero img" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg text-white font-semibold">
          Not Sure where to go? Perfect.
        </p>
        <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-4 hover:shadow-xl active:scale-90 transition duration-150">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
