"use client";
import { createCareerForm } from "@/service/axiosInstance";
import toast from "react-hot-toast";
import { useState } from "react";

const CareerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    location: "",
    position: "",
    lastSalary: "",
    countryCode: "+91",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", `${formData.countryCode} ${formData.phone}`);
    data.append("resume", formData.resume);
    data.append("location", formData.location);
    data.append("position", formData.position);
    data.append("lastSalary", formData.lastSalary);

    try {
      await createCareerForm(data);
      toast.success("Application submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        resume: null,
        location: "",
        position: "",
        lastSalary: "",
        countryCode: "+91",
      });
      e.target.reset(); // Reset file input UI
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-28 container mx-auto px-4 pb-10 flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src="/career.jpg"
            alt="Join Our Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-center font-bold text-3xl mb-6 text-gray-800">
            Join Our Team
          </h1>
          <p className="text-center text-gray-600 mb-8">
            We are always looking for talented individuals. Send us your resume!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-28 px-2 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
                >
                  <option value="+91">IN +91</option>
                  <option value="+1">US +1</option>
                  <option value="+44">UK +44</option>
                  <option value="+971">UAE +971</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="98765 43210"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Current Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="City, Country"
              />
            </div>

            <div>
              <label
                htmlFor="position"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Position Applied For
              </label>
              <input
                type="text"
                id="position"
                name="position"
                required
                value={formData.position}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Software Engineer"
              />
            </div>

            <div>
              <label
                htmlFor="lastSalary"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Expected Salary
              </label>
              <input
                type="text"
                id="lastSalary"
                name="lastSalary"
                required
                value={formData.lastSalary}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="e.g. ₹50,000"
              />
            </div>

            <div>
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Upload Resume (PDF/DOC)
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-600 text-white font-bold py-3 px-4 rounded-md hover:bg-cyan-700 transition duration-300 shadow-md"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
