import { FOOTER } from "@/constants";
import { link } from "fs";
import {
  Facebook,
  FacebookIcon,
  InstagramIcon,
  TwitchIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap border-b border-neutral-700">
          <div className="w-full sm:w-1/2 lg:w-6/12 p-4">
            <h2 className="hover:text-neutral-500">
                <Link href="#">Homes</Link>
            </h2>
            <p className="lg:max-w-sm py-8 text-sm">{FOOTER.description}</p>
            <div className="flex flex-wrap my-10 gap-4">
              <Facebook className="hover:text-neutral-500"/>
              <InstagramIcon className="hover:text-neutral-500" />
              <YoutubeIcon className="hover:text-neutral-500"/>
              <TwitterIcon className="hover:text-neutral-500" />
            </div>
          </div>
          {FOOTER.categories.map((categories, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-2/12 p-4">
              <h3 className="font-semibold uppercase pb-4">
                {categories.name}
              </h3>
              <ul>
                {categories.links.map((links, index) => (
                  <li key={index} className="my-4">
                    <Link
                      href={links.url}
                      className="text-sm hover:text-neutral-500"
                    >
                        {links.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-sm text-center my-10 text-neutral-500">{FOOTER.copyright}</p>
      </div>
    </div>
  );
};

export default Footer;
