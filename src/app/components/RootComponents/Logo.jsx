import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          width={50}
          height={50}
          alt="car-doctor"
          src={"/assets/logo.svg"}
          priority
          className="w-full h-auto"
        />
      </Link>
    </div>
  );
};

export default Logo;
