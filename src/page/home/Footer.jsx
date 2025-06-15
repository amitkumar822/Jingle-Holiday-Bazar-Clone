import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  quickLinks: [
    "Home",
    "About Us",
    "Blog list",
    "Destinations",
    "Hotels",
    "Gallery",
  ],
  domestic: [
    "Uttarakhand",
    "Mumbai",
    "Ladakh",
    "Meghalaya",
    "North East India",
    "Rajasthan",
  ],
  international: [
    "Maldives",
    "Singapore",
    "Switzerland",
    "Saudi Arabia",
    "Thailand",
    "Dubai",
  ],
  yatra: [
    "Mata Vaishno",
    "Kedarnath",
    "Badrinath",
    "Char Dham Yatra",
    "Ramayana Yatra",
    "9 Devi Yatra",
  ],
};

export default function Footer() {
  return (
    <div className="relative overflow-hidden">
      {/* Footer Content */}
      <div className="relative z-10 bg-gradient-to-b from-blue-900 to-blue-100 text-white py-12 px-6 md:px-16 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
          {/* Contact */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Jingle Holiday bazar</h2>
            <p className="mb-2">Travel with us from here to any where...</p>
            <p className="flex items-center gap-2">📞 Phone: +91 8506922777</p>
            <p className="mt-2">✉ jingleholidaybazar@gmail.com</p>
            <p>✉ thejingleholidaybazar@gmail.com</p>
            <p className="mt-2">📞 24/7 Dedicated Customer Support</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            {footerLinks.quickLinks.map((link) => (
              <p key={link} className="hover:text-blue-300 cursor-pointer">
                › {link}
              </p>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-2">Domestic Packages</h3>
            {footerLinks.domestic.map((link) => (
              <p key={link} className="hover:text-blue-300 cursor-pointer">
                › {link}
              </p>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-2">International Packages</h3>
            {footerLinks.international.map((link) => (
              <p key={link} className="hover:text-blue-300 cursor-pointer">
                › {link}
              </p>
            ))}
          </div>
          <div>
            <h3 className="font-semibold mb-2">Yatra</h3>
            {footerLinks.yatra.map((link) => (
              <p key={link} className="hover:text-blue-300 cursor-pointer">
                › {link}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 border-t pt-4 text-xs flex justify-between items-center flex-wrap">
          <p>
            Powered By{" "}
            <a href="#" className="text-blue-300">
              Namrata Universal
            </a>{" "}
            | All Rights Reserved by Jingleholidaybazar
          </p>
          <div className="flex gap-4 text-lg mt-2 md:mt-0">
            <Facebook className="hover:text-blue-300 cursor-pointer" />
            <Twitter className="hover:text-blue-300 cursor-pointer" />
            <Instagram className="hover:text-blue-300 cursor-pointer" />
            <Linkedin className="hover:text-blue-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
