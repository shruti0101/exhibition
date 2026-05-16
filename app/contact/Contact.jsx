"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import { auth } from "@/utils/firebase";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // OTP States
  const [otp, setOtp] = useState("");
  const [showOtpBox, setShowOtpBox] =
    useState(false);

  const [confirmationResult, setConfirmationResult] =
    useState(null);

  const [isPhoneVerified, setIsPhoneVerified] =
    useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Initialize Recaptcha
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !window.recaptchaVerifier
    ) {
      window.recaptchaVerifier =
        new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "normal",
          }
        );

      window.recaptchaVerifier.render();
    }

    return () => {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
    };
  }, []);

  // Send OTP
  const sendOTP = async (phone) => {
    try {
      setLoading(true);

      const appVerifier =
        window.recaptchaVerifier;

      const result =
        await signInWithPhoneNumber(
          auth,
          "+91" + phone,
          appVerifier
        );

      setConfirmationResult(result);
      console.log(confirmationResult);

      setShowOtpBox(true);

      toast.success("OTP Sent Successfully");
    } catch (error) {
      console.log(error);

      toast.error(
        error.message || "Failed to send OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  // Final API Submit
  const submitFinalForm = async () => {
    try {
      const formDataTemplate = {
        platform: "Stridres Contact Page",

        platformEmail:
          "info@stridesdesign.com",

        name: formData?.name,

        phone: formData?.phone,

        email: formData?.email,

        product: "Na",

        place: "Na",

        message: formData?.message,
      };

      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formDataTemplate
      );

      if (
        res.status === 201 ||
        res.status === 200
      ) {
        toast.success(
          "Message sent successfully!"
        );

        // Reset Form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        // Reset OTP States
        setOtp("");
        setShowOtpBox(false);
        setIsPhoneVerified(false);
        setConfirmationResult(null);
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error.message ||
          "Something went wrong"
      );
    }
  };

  // Verify OTP
  const verifyOTP = async () => {
    try {
      setLoading(true);

      await confirmationResult.confirm(
        otp
      );

      setIsPhoneVerified(true);

      toast.success(
        "Phone Verified Successfully"
      );

      await submitFinalForm();
    } catch (error) {
      console.log(error);

      toast.error("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneDigits =
      formData.phone.replace(/\D/g, "");

    if (phoneDigits.length < 10) {
      toast.error(
        "Please enter a valid phone number"
      );

      return;
    }

    // If OTP not sent
    if (!showOtpBox) {
      await sendOTP(phoneDigits);
    }
  };

  return (
    <>
      {/* HERO */}
      <div
        className="relative h-[40vh] md:h-[90vh] flex items-center justify-center text-center bg-cover bg-center bg-fixed overflow-hidden"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/d5/27/db/d527dba6c380c188cdd6ec2ac7b6cec6.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/50 via-slate-900/60 to-slate-800/60" />

        <div className="relative z-10 px-6 max-w-5xl">
          <div className="mx-auto mb-5 h-0.75 w-24 bg-[#039C98] rounded-full" />

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Contact Us
          </h2>

          <p className="mt-6 text-sm sm:text-base text-white/80 max-w-xl mx-auto">
            Let’s discuss your project,
            requirements, or collaboration
            ideas.
          </p>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="bg-gray-100 pt-20 w-full">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 bg-white shadow-2xl">
            {/* LEFT PANEL */}
            <div className="bg-[#039C98] px-8 py-16 lg:px-12 text-white">
              <div className="mb-12">
                <h4 className="mb-3 text-md font-bold tracking-widest uppercase text-[#caa56a]">
                  Location
                </h4>

                <p className="text-md leading-relaxed text-white/90">
                  49C, Block JD, Dakshini
                  Pitampura,
                  <br />
                  Delhi, 110034
                </p>
              </div>

              <div className="mb-12">
                <h4 className="mb-3 text-md font-bold tracking-widest uppercase text-[#caa56a]">
                  Call
                </h4>

                <p className="text-md leading-relaxed text-white/90">
                  011-45719352
                </p>
              </div>

              <div className="mb-12">
                <h4 className="mb-3 text-md font-bold tracking-widest uppercase text-[#caa56a]">
                  Email
                </h4>

                <p className="text-md leading-relaxed text-white/90">
                  info@stridesdesign.com
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-bold text-md tracking-widest uppercase text-[#caa56a]">
                  Open Hours
                </h4>

                <p className="text-md leading-relaxed text-white/90">
                  Mon – Sat
                  <br />
                  10:00 AM – 6:00 PM
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="lg:col-span-2 px-8 py-16 lg:px-16">
              <h2 className="mb-3 text-4xl font-serif text-gray-800">
                Get in Touch
              </h2>

              <p className="mb-10 text-sm text-gray-600 max-w-xl">
                Fill out the form and our
                team will get back to you
                shortly.
              </p>

              <form
                className="space-y-8"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
                />

                {/* Recaptcha */}
                <div id="recaptcha-container"></div>

                {/* OTP BOX */}
                {showOtpBox &&
                  !isPhoneVerified && (
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) =>
                          setOtp(
                            e.target.value
                          )
                        }
                        className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
                      />

                      <button
                        type="button"
                        onClick={verifyOTP}
                        disabled={loading}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 transition"
                      >
                        {loading
                          ? "Verifying..."
                          : "Verify OTP"}
                      </button>
                    </div>
                  )}

                {/* SEND OTP BUTTON */}
                {!showOtpBox && (
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex cursor-pointer items-center justify-center bg-[#039C98] px-10 py-4 text-xs tracking-widest uppercase text-white transition hover:bg-[#027a76]"
                  >
                    {loading
                      ? "Sending..."
                      : "Send OTP"}
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[550px] overflow-hidden mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13998.388467209066!2d77.13659!3d28.701696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c364cc7eeb%3A0xabe849dd2636c4c!2sStrides%20Design%20Studio%20%7C%20Exhibition%20Stall%20Design%20Agency!5e0!3m2!1sen!2sin!4v1766649050735!5m2!1sen!2sin"
            loading="lazy"
            className="w-full h-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}