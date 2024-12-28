"use client";

import React, { useState } from "react";
import { Button } from "@/Components/UI/button";
import { CheckCircle } from "lucide-react";

const BookDemo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    companyType: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert(`Company Type: ${formData.companyType}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-sky-100">
      {/* Hero Section with How It Works and Demo Form */}
      <header className="relative  text-black py-20">
        <div
          className="absolute inset-0 bg-opacity-25 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/demo-bg.jpg')" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Content: Hero Text and How It Works */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-extrabold">
                Book Your Personalized Demo
              </h1>
              <p className="mt-4 text-lg leading-relaxed">
                Discover how Zedops can optimize your construction management
                and collaboration workflows.
              </p>
            </div>
            <div className="relative rounded-lg p-8 bg-white shadow-md">
              <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
              <p className="mt-2 text-sm text-gray-600">
                Follow these simple steps to get started with your demo.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  {
                    step: "Step 1",
                    title: "Request a Demo",
                    description: "Fill out the form to let us know your needs.",
                  },
                  {
                    step: "Step 2",
                    title: "Schedule a Meeting",
                    description: "Our team will reach out to arrange a demo.",
                  },
                  {
                    step: "Step 3",
                    title: "Experience the Difference",
                    description: "Discover the power of Zedops in action.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-orange-500" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content: Demo Form */}
          <div className="relative bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              Request a Demo
            </h2>
            <p className="mt-4 text-lg text-gray-600 text-center">
              Fill out the form below, and one of our experts will get in touch
              to schedule your demo.
            </p>
            <form className="mt-8 grid gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField
                  label="First Name*"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Last Name*"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField
                  label="Business Email*"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Phone*"
                  name="phone"
                  placeholder="+91 1234567890"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField
                  label="Company Name*"
                  name="companyName"
                  placeholder="Enter your company name"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
                <SelectField
                  label="Company Type*"
                  name="companyType"
                  value={formData.companyType}
                  onChange={handleInputChange}
                  options={[
                    "General Contractor",
                    "Subcontractor",
                    "Owner or Developer",
                    "Government",
                    "Other",
                  ]}
                />
              </div>
              <Button type="submit" className="w-full py-6 transition">
                Get a Demo
              </Button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

const InputField = ({
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-800">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 p-3 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
      />
    </div>
  );
};

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: string[];
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-800">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 p-3 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
      >
        <option value="">Select a company type</option>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BookDemo;
