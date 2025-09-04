import React from "react";
import servicesData from "@/data/services.json";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { getServices } from "@/app/actions/services";
import Link from "next/link";
const Services = async () => {
  const servicesData = await getServices();
  console.log(servicesData);

  return (
    <div>
      <p>Services</p>
      <p>Our Services Area</p>
      <p>
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-3 items-center justify-center gap-4">
        {servicesData.map((service) => {
          return (
            <div
              key={service?._id}
              className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-52">
                <Image
                  src={service?.img}
                  alt={service?.title}
                  fill
                  sizes="full"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service?.title}
                </h3>

                <div className="flex justify-between items-center text-primary mt-auto">
                  <p className="font-medium text-sm sm:text-base">
                    Price: ${service?.price}
                  </p>
                  <Link
                    href={`/services/${service?._id}`}
                    className="p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition"
                  >
                    <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
