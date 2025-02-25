import { TESTIMONIALS } from "@/constants";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="container mx-auto my-20 border-b pb-10">
      <h2 className="mb-20 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
        Hear from our Clients
      </h2>
      <div className="flex flex-wrap">
        {TESTIMONIALS.map((testimonials, index) => (
          <div key={index} className="w-full p-2 md:1/2 lg:w-1/4">
            <div className="rounded-xl border border-neutral-400 p-4">
            <div className="flex items-center">
              <Image
                className="mr-4 rounded-full border-4 border-neutral-400"
                src={testimonials.image}
                width={80}
                height={80}
                alt={testimonials.name}
              ></Image>
              <div>
              <h4 className="w-full">{testimonials.name}</h4>
              <span className="text-sm text-neutral-600">{testimonials.instagram}</span>
              </div>
            </div>
            <p className="p-4">{testimonials.feedback}</p>
            <p className="text-sm text-neutral-400">{testimonials.city_country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
