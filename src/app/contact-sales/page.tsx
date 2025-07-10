"use client";

import React, {useState} from "react";
import {Mail, Phone, MapPin, Building, Users, ArrowRight} from "lucide-react";
import {Button} from "@/Components/UI/button";
import {useToast} from "@/hooks/use-toast";

const ContactSales = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        message: "",
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
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
    const {toast} = useToast();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await fetch("/api/sendmail", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(formData),
                });

                const data = await response.json();

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

                if (data.success) {
                    setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        company: "",
                        jobTitle: "",
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
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
            <header className="py-16 relative overflow-hidden bg-gradient-to-r from-secondary/10 to-secondary/10">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-secondary blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-secondary blur-3xl"></div>
                </div>

                <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl font-extrabold lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-secondary to-secondary">
                        We&apos;re Here to Help You Succeed
                    </h1>
                    <p className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
                        Have questions or want to learn more? Get in touch with our sales
                        team and discover how ZedOps can empower your construction
                        management with AI-driven solutions.
                    </p>
                </div>
            </header>

            <main className="flex-grow relative z-10 py-12 bg-gray-50">
                <section className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div
                            className="bg-white p-8 rounded-xl border border-gray-200 shadow-xl transform transition-all hover:shadow-2xl hover:border-secondary/30">
                            <h2 className="text-3xl font-extrabold text-gray-900">
                                <span className="text-secondary">Contact</span> Our Sales Team
                            </h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Let us know how we can help, and our team will be in touch with
                                you shortly to discuss your construction management needs.
                            </p>

                            <div className="mt-10 space-y-8">
                                <ContactItem
                                    icon={<Phone className="w-6 h-6 text-secondary"/>}
                                    title="Call Us"
                                    content="+91 97878 82297"
                                />

                                <ContactItem
                                    icon={<Mail className="w-6 h-6 text-secondary"/>}
                                    title="Email Us"
                                    content="sales@zedops.com"
                                />

                                <ContactItem
                                    icon={<MapPin className="w-6 h-6 text-secondary"/>}
                                    title="Visit Us"
                                    content="Madurai, Tamil Nadu, IN"
                                />
                            </div>

                            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900">Why ZedOps?</h3>
                                <ul className="mt-4 space-y-3">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-5 h-5 mt-1 text-secondary">
                                            <svg viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd"
                                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-gray-700">AI-powered construction management</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-5 h-5 mt-1 text-secondary">
                                            <svg viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd"
                                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-gray-700">Streamlined project workflows</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-5 h-5 mt-1 text-secondary">
                                            <svg viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd"
                                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-gray-700">Real-time collaboration tools</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div
                            className="bg-white p-8 rounded-xl border border-gray-200 shadow-xl transform transition-all">
                            <h3 className="text-3xl font-extrabold text-gray-900">
                                Get in <span className="text-secondary">Touch</span>
                            </h3>
                            <p className="mt-3 text-gray-600">Fill out the form below and we&apos;ll get back to you as
                                soon as possible.</p>

                            <form className="mt-8 grid gap-6" onSubmit={handleSubmit}>
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
                                        icon={<Mail className="w-4 h-4 text-gray-500"/>}
                                    />
                                    <InputField
                                        label="Phone*"
                                        name="phone"
                                        placeholder="+91 1234567890"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        error={errors.phone}
                                        icon={<Phone className="w-4 h-4 text-gray-500"/>}
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <InputField
                                        label="Company"
                                        name="company"
                                        placeholder="Your company name"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        icon={<Building className="w-4 h-4 text-gray-500"/>}
                                    />
                                    <InputField
                                        label="Job Title"
                                        name="jobTitle"
                                        placeholder="Your role"
                                        value={formData.jobTitle}
                                        onChange={handleInputChange}
                                        icon={<Users className="w-4 h-4 text-gray-500"/>}
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
                                        variant="secondary"
                                        type="submit"
                                        className="w-full py-3 mt-2 text-white flex items-center justify-center gap-2 group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                                    >
                                        Submit Request
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
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

const ContactItem = ({icon, title, content}: { icon: React.ReactNode, title: string, content: string }) => {
    return (
        <div className="flex items-start group">
            <div className="flex-shrink-0 p-3 bg-gray-200 rounded-lg group-hover:bg-secondary/20 transition-colors">
                {icon}
            </div>
            <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-600">{title}</h3>
                <p className="text-lg font-semibold text-gray-900">{content}</p>
            </div>
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
                        icon,
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
    icon?: React.ReactNode;
}) => {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
            <div className="relative">
                {type === "textarea" ? (
                    <textarea
                        name={name}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        rows={4}
                        className={`w-full p-3 bg-white rounded-lg border ${
                            error ? "border-red-500" : "border-gray-300"
                        } text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all`}
                    />
                ) : (
                    <div className="relative">
                        <input
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                            className={`w-full p-3 ${icon ? 'pl-10' : 'pl-3'} bg-white rounded-lg border ${
                                error ? "border-red-500" : "border-gray-300"
                            } text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all`}
                        />
                        {icon && (
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                {icon}
                            </div>
                        )}
                    </div>
                )}
                {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            </div>
        </div>
    );
};

export default ContactSales;
