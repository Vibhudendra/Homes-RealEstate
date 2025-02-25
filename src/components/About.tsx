import { ABOUT_US_TEXT } from "@/constants";

const About = () => {
  return (
    <div className="container mx-auto my-20 border-b pb-18">
      <div className="mb-8">
        <h2 className="mb-6 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
          About Us
        </h2>
        <p className="py-6 text-center text-lg tracking-tighter lg:pr-20">
          {ABOUT_US_TEXT}
        </p>
      </div>
      <div className="flex flex-wrap text-center">
        <div className="w-full border-neutral-700 p-6 lg:w-1/2 lg:border-r">
          <p
            className="bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text
                text-5xl text-transparent lg:text-7xl"
          >
            10000+
          </p>
          <p className="my-8 font-medium">Clients from 2020</p>
        </div>
        <div className="w-full p-6 lg:w-1/2">
          <p className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-800 bg-clip-text text-5xl text-transparent lg:text-7xl">
            3000+
          </p>
          <p className="my-8 font-medium">Properties sold</p>
        </div>
      </div>
    </div>
  );
};

export default About;
