import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[480px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <Image src="/hero.jpg" layout="fill" objectFit="cover" />
    </div>
  );
}

export default Banner;
