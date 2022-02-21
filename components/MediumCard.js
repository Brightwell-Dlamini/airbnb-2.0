import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out ">
      <div className="relative h-80 w-80">
        <Image
          src={img}
          layout="fill"
          objectFit="contain"
          className="rounded-xl"
        />
      </div>
      <p className="text-2xl mt-3">{title}</p>
    </div>
  );
}

export default MediumCard;
