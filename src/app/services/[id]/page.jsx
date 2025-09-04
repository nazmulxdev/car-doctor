import { getCollection } from "@/lib/db.connect.mjs";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ServiceDetails = async ({ params }) => {
  const { id } = await params;
  const { servicesCollection } = await getCollection();
  const service = await servicesCollection.findOne({
    _id: new ObjectId(id),
  });
  console.log(service);
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <Image
          src={service.img}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {service.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Description */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            About this service
          </h2>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>
        </div>

        {/* Facilities */}
        {service.facility && service.facility.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Facilities
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.facility.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white shadow rounded-xl p-4"
                >
                  <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing + CTA */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-lg rounded-xl p-6 border">
          <p className="text-2xl font-bold text-primary">
            Price: ${service.price}
          </p>
          <button className="mt-4 sm:mt-0 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/80 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
