"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react"; // Lucide icons for contact details
import { Button } from "@/Components/UI/button";
import { useToast } from "@/hooks/use-toast";


const ContactSales = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const { toast } = useToast();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch("/api/sendmail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json(); // Parse JSON response
        if (data.success) {
          toast({
            title: "✅ Success",
            description: data.message,
          });
        } else {
          toast({
            title: "❌ Error",
            description: data.message,
          });
        }

        // Reset form only on success
        if (data.success) {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
          setErrors({});
        }
      } catch (error) {
        console.log(error)
        toast({
          title: "❌ Network Error",
          description: "Failed to send request. Please try again.",
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-background">
      {/* Header Section */}
     
      <header className=" text-white py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-0 text-center">
          <h1 className="text-3xl font-extrabold lg:text-4xl">
            We&#39;re Here to Help You Succeed
          </h1>
          <p className="mt-4 text-lg leading-relaxed">
            Have questions or want to learn more? Get in touch with our sales
            team and discover how Zedops can empower your construction
            management.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow bg-gray-50">
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Section: Contact Information */}
            <div>
              <h2 className="text-3xl font-extrabold">
                Contact Our Sales Team
              </h2>
              <p className="mt-4 text-lg ">
                Let us know how we can help, and our team will be in touch with
                you shortly.
              </p>
              <ul className="mt-8 space-y-6">
                <li className="flex items-center">
                  <Phone className="w-6 h-6  mr-4" />
                  <span className="text-lg  font-semibold">
                    +91 97878 82297
                  </span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-6 h-6  mr-4" />
                  <span className="text-lg  font-semibold">
                    sales@zedops.com
                  </span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-6 h-6  mr-4" />
                  <span className="text-lg font-semibold">
                    Madurai, Tamil Nadu, IN
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Section: Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-3xl font-extrabold text-gray-800">
                Get in Touch
              </h3>
              <form className="mt-6 grid gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InputField
                    label="First Name*"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    error={errors.firstName}
                  />
                  <InputField
                    label="Last Name*"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    error={errors.lastName}
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
                    error={errors.email}
                  />
                  <InputField
                    label="Phone*"
                    name="phone"
                    placeholder="+91 1234567890"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    error={errors.phone}
                  />
                </div>

                <InputField
                  label="Message"
                  name="message"
                  placeholder="Write your message here"
                  type="textarea"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <div>
                  <Button
                    variant={"destructive"}
                    type="submit"
                    className="w-full py-3 text-white"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
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
  error,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-800">{label}</label>
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`mt-2 p-3 rounded-lg border ${
            error ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-orange-500 transition`}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`mt-2 p-3 rounded-lg border ${
            error ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-orange-500 transition`}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default ContactSales;
