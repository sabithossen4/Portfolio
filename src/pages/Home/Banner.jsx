import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/93zw4sdD/sabit.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">HI ! I'M SABIT HOSSEN</h1>
          <p className="py-6">
            A FrontEnd Developer & MERN Stack Specialist. I'm deeply passionate
            about creating innovative, responsive, and user-friendly web
            applications that captivate and engage users...
          </p>

          <div className="flex justify-around gap-4 text-2xl mb-4">
            <a href="https://github.com/sabithossen4" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-blue-600" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-600" />
            </a>
            <a href="https://facebook.com/your-profile" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-blue-600" />
            </a>
            <a href="mailto:sabithossen.dev@gmail.com">
              <FaEnvelope className="hover:text-red-500" />
            </a>
            <a href="https://wa.me/8801911274560" target="_blank" rel="noreferrer">
              <FaWhatsapp className="hover:text-green-500" />
            </a>
          </div>

          <div className="flex justify-between">
            <button className="btn btn-primary">Hire Me</button>
            <button className="btn btn-primary">Download Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
