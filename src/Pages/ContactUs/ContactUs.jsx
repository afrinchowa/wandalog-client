import React from "react";
import SectionTitle from "../../components/SectionTitle";

const ContactUs = () => {
  return (
    <div className="">
      {/* Header Section */}
      <div className="bg-slate-900 text-white py-10 text-center h-72 flex justify-center items-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        
      </div>

      {/* Google Map */}
      <div className="w-full h-96">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509334!2d144.96305781531748!3d-37.81410797975192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf4c6f0f52aafe6a5!2sVictoria%2C%20Australia!5e0!3m2!1sen!2sbd!4v1618301170456!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {/* Email */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <i className="fas fa-envelope text-3xl text-green-600"></i>
          <h2 className="text-lg font-semibold mt-3">Email Address</h2>
          <p className="text-gray-600">info@company.com</p>
        </div>

        {/* Phone */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <i className="fas fa-phone text-3xl text-green-600"></i>
          <h2 className="text-lg font-semibold mt-3">Phone Number</h2>
          <p className="text-gray-600">010-020-0340</p>
        </div>

        {/* Address */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <i className="fas fa-map-marker-alt text-3xl text-green-600"></i>
          <h2 className="text-lg font-semibold mt-3">Address</h2>
          <p className="text-gray-600">Victoria, Australia</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-3xl">
             <SectionTitle
                heading={" Contact "}
                subHeading={"Feel free to message us"}></SectionTitle>
        <div className="w-16 h-1 bg-slate-600 mx-auto mt-2"></div>

        <form className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name" className="border p-3 rounded w-full" />
            <input type="text" placeholder="Your Phone" className="border p-3 rounded w-full" />
          </div>
          <div className="mt-4">
            <input type="email" placeholder="Your Email" className="border p-3 rounded w-full" />
          </div>
          <div className="mt-4">
            <input type="text" placeholder="Subject" className="border p-3 rounded w-full" />
          </div>
          <div className="mt-4">
            <textarea placeholder="Your Message" className="border p-3 rounded w-full h-32"></textarea>
          </div>
          <button className="bg-slate-600 text-white py-3 px-6 rounded mt-4 w-full hover:bg-slate-800">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
