import { SERVICES_TEXT } from "@/constants";
import Image from "next/image";
import { Button } from "./ui/button";

const Services = () => {
  return (
    <div className="container mx-auto my-8 border-b pb-10">
      <h2 className="mb-10 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl mt-20">
        Services
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="p-6">
            <Image
              className="rounded-xl object-cover"
              src="/service.jpeg"
              width={600}
              height={600}
              alt="Services"
            ></Image>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="mt-10 text-5xl lg:text-7xl font-light">
            We are 
            <span className=" leading-snug lg:block font-normal"> available in </span>
            <span className=" font-bold"> 40+ countries!</span>
          </h2>
          <p className="max-w-xl py-6 text-lg tracking-tighter lg:pr-20">{SERVICES_TEXT}</p>
          <Button variant="link" className="text-lg lg:w-1">View</Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
