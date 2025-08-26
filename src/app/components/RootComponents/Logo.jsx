import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          width={20}
          height={20}
          alt="car-doctor"
          src={"/assets/logo.svg"}
        />
      </Link>
    </div>
  );
};

export default Logo;
