"use client";
import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaLocationDot, FaPaperPlane, FaCheck } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "STEAM Education & Tinkering Labs",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;

    setIsSubmitting(true);

    try {
      // 1. Submit directly to Formspree endpoint xzepjavd
      await fetch("https://formspree.io/f/xzepjavd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          interest: formData.interest,
          message: formData.message,
          _replyto: formData.email,
          _subject: `[GlobalX Inquiry] ${formData.interest} - ${formData.name}`,
        }),
      });

      // 2. Also send to internal Next.js API route for logging/backup
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
    } catch {
      // Show confirmation UX
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };





  return (
    <section id="contact" className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="rounded-3xl bg-white border border-slate-200 text-black p-8 lg:p-14 shadow-xl relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-slate-200/50 blur-3xl pointer-events-none"></div>

        <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-extrabold tracking-widest text-slate-600 uppercase">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-black">
              Ready to Accelerate Innovation & STEAM Impact?
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Reach out to discuss setting up STEAM labs for your school, implementing green digital strategies for your enterprise, or pitching your tech startup.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href="tel:+254764197560"
                className="flex items-center gap-4 p-4 rounded-2xl  hover:border-black transition-all group"
              >
                <div className="p-3 rounded-xl bg-black text-white text-lg">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-500">Direct Phone Line</p>
                  <p className="text-sm font-bold text-black group-hover:underline transition-colors">+254 (764) 197-560</p>
                </div>
              </a>

              <a
                href="mailto:info@globalxinvestmentsltd.com"
                className="flex items-center gap-4 p-4 rounded-2xl  hover:border-black transition-all group"
              >
                <div className="p-3 rounded-xl bg-black text-white text-lg">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-500">Email Enquiries</p>
                  <p className="text-sm font-bold text-black group-hover:underline transition-colors">info@globalxinvestmentsltd.com</p>
                </div>
              
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl">
                <div className="p-3 rounded-xl bg-black text-white text-lg">
                  <FaLocationDot />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-500">Regional HQ</p>
                  <p className="text-sm font-bold text-black">Nairobi, Kenya & Regional Partners</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50/80 text-black p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xs">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-black text-white mx-auto flex items-center justify-center text-2xl font-bold">
                  <FaCheck />
                </div>
                <h3 className="text-2xl font-bold text-black">Thank You for Reaching Out!</h3>
                <p className="text-sm text-slate-700 max-w-md mx-auto">
                  Your inquiry regarding <strong>{formData.interest}</strong> has been received. Our team will contact you within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", organization: "", interest: "STEAM Education & Tinkering Labs", message: "" });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-black hover:bg-slate-800 transition-colors shadow-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-black mb-2">Schedule a Consultation</h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Organization / School</label>
                    <input
                      type="text"
                      placeholder="Global Academy / Enterprise Ltd"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full p-3 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Area of Interest</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full p-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-black bg-white"
                    >
                      <option value="STEAM Education & Tinkering Labs">STEAM Education & Tinkering Labs</option>
                      <option value="Digital Transformation Consulting">Digital Transformation Consulting</option>
                      <option value="Green Transitions & Sustainability">Green Transitions & Sustainability</option>
                      <option value="Startup Funding & Accelerator">Startup Funding & Accelerator</option>
                      <option value="General Partnership">General Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Message / Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-black hover:bg-slate-800 disabled:bg-slate-400 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs" />
                      Submit Inquiry
                    </>
                  )}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}



