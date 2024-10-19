"use client";
import Image from "next/image";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Carousel } from "react-responsive-3d-carousel";

export default function Home() {
  return (
    <div className="h-full w-full bg-black flex flex-col">
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left Section */}
        <div className="flex flex-col flex-2 flex-grow">
          {/* Logo */}
          <div className="bg-white p-6 md:p-10">
            <img
              src="/assets/images/Header_logo.png"
              alt="Logo"
              className="flex-1"
            />
          </div>

          {/* About Us Section */}
          <div className="bg-black text-[#9F9E9E] p-6 md:p-10 flex-1">
            <p className="text-lg md:text-xl font-bold">About Us</p>
            <div className="pl-4 md:pl-10">
              <p className="border-l-2 pl-4 md:pl-6 border-[#9F9E9E]">
                Inspired by the iconic building that shouts for elegance and
                beauty, we started IWAN Design House to influence society more
                from the artistic point of view. In the last few years, we had
                over &plus;100 projects in Egypt, Saudi Arabia, Kuwait, Qatar,
                Lebanon, Bahrain, UAE, and Germany. We are providing an
                integrated solution for our clients in architectural design,
                urban design, and landscape design.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="bg-white text-black p-6 md:p-10 flex-1">
            <p className="text-lg md:text-xl font-bold">Vision</p>
            <div className="pl-4 md:pl-10">
              <p className="border-l-2 pl-4 md:pl-6 border-black">
                Our vision is to solidify our services with more project
                executions while expanding in other Arab and European countries
                with the Iwan concept of humanity, functionality, and elegance.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <img
          src="/assets/images/design_image.png"
          className="w-full"
          alt="Design Image"
        />
      </div>

      <div className="flex md:flex-row flex-col justify-evenly">
        {/* Mission Section */}
        <div className="bg-black text-[#9F9E9E] p-6 md:p-10 flex-1">
          <p className="text-lg md:text-xl font-bold">Mission</p>
          <div className="pl-4 md:pl-10">
            <p className="border-l-2 pl-4 md:pl-6 border-[#9F9E9E]">
              Our mission is to design projects without compensations, to
              achieve the optimum in the most possible ways and in all aspects
              of design; where form and function have to be successfully
              fulfilled, regulations and budgets are considered, and the result
              is a pleasure to us, our client, the building users, and everyone
              passing by.
            </p>
          </div>
        </div>

        {/* Portfolio Button */}
        <div className="bg-black flex flex-col items-center justify-center py-8 flex-1">
          <a className="btn md:btn-md w-60 rounded-full flex items-center justify-center mt-6">
            Portfolio <FileDownloadIcon className="ml-2" />
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col md:flex-row justify-evenly text-center text-[#9F9E9E] bg-black p-6">
        <p>Full website coming soon. Stay tuned!</p>
        <p>info@iwandesignhouse.com</p>
      </div>
    </div>
  );
}
