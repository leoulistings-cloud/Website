"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Check } from "lucide-react";

const offices = [
  {
    city: "Los Angeles",
    address: "eXp Realty of Greater Los Angeles, Inc.",
    zip: "PO Box 847277, Los Angeles, CA 90084-7277",
    phone: "(949) 300-4485",
    email: "leoulistings@gmail.com",
  },
];

const inquiryTypes = [
  "Buying a Property",
  "Selling a Property",
  "Off-Market Inquiry",
  "Investment Advisory",
  "General Inquiry",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "Buying a Property",
    budget: "Prefer not to say",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          inquiryType: "Buying a Property",
          budget: "Prefer not to say",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="section-label mb-3">Let's Connect</p>
          <h1 className="section-title mb-4">
            Get in <span className="text-gold-500 italic">Touch</span>
          </h1>
          <div className="gold-divider" />
          <p className="text-white/50 text-sm mt-4 max-w-lg leading-relaxed">
            Ready to find your perfect home or sell your property? Reach out to Johnny Leou. All inquiries are answered promptly and handled with care.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <p className="text-gold-500 text-xs tracking-[0.2em] uppercase mb-4">Our Offices</p>
                <div className="space-y-6">
                  {offices.map((office) => (
                    <div key={office.city} className="border border-white/5 hover:border-gold-500/20 p-5 transition-colors">
                      <p className="font-serif text-white text-lg mb-3">{office.city}</p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 text-white/50 text-xs">
                          <MapPin size={11} className="text-gold-500 shrink-0 mt-0.5" />
                          <span>{office.address}<br />{office.zip}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/50 text-xs">
                          <Phone size={11} className="text-gold-500" />
                          <a href={`tel:${office.phone}`} className="hover:text-white transition-colors">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-white/50 text-xs">
                          <Mail size={11} className="text-gold-500" />
                          <a href={`mailto:${office.email}`} className="hover:text-white transition-colors">
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <p className="text-gold-500 text-xs tracking-[0.2em] uppercase mb-4">Schedule a Showing</p>
                <p className="text-white/50 text-xs mb-4">Book a time that works for you.</p>
                <a
                  href="https://calendly.com/leoulistings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gold-500 hover:bg-gold-600 text-navy-950 text-xs font-semibold tracking-widest uppercase px-4 py-3 text-center transition-colors mb-4"
                >
                  Open Calendar
                </a>
              </div>

              <div className="glass-card p-6">
                <p className="text-gold-500 text-xs tracking-[0.2em] uppercase mb-4">Hours</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/50">Mon – Fri</span>
                    <span className="text-white/80">8:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Saturday</span>
                    <span className="text-white/80">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Sunday</span>
                    <span className="text-white/80">By Appointment</span>
                  </div>
                </div>
                <p className="text-white/30 text-xs mt-4">
                  Urgent client matters are handled 24/7.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              {submitted ? (
                <div className="h-full flex items-center justify-center py-20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold-500 flex items-center justify-center mx-auto mb-6">
                      <Check size={28} className="text-navy-950" />
                    </div>
                    <h3 className="font-serif text-white text-3xl mb-3">Message Received</h3>
                    <p className="text-white/50 text-sm max-w-sm leading-relaxed">
                      Thank you for reaching out. A member of our team will be in touch within 24 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-navy-900 border border-white/5 p-8 lg:p-12">
                  <h2 className="font-serif text-white text-2xl mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">First Name *</label>
                        <input
                          required
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full bg-navy-950 border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-gold-500 transition-colors placeholder:text-white/20"
                          placeholder="Alexandra"
                        />
                      </div>
                      <div>
                        <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">Last Name *</label>
                        <input
                          required
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full bg-navy-950 border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-gold-500 transition-colors placeholder:text-white/20"
                          placeholder="Worthington"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-navy-950 border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-gold-500 transition-colors placeholder:text-white/20"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">Phone *</label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-navy-950 border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-gold-500 transition-colors placeholder:text-white/20"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">Inquiry Type</label>
                      <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} className="w-full bg-navy-950 border border-white/10 text-white/70 text-sm px-4 py-3 outline-none focus:border-gold-500 transition-colors">
                        {inquiryTypes.map((t) => (
                          <option key={t} value={t} className="bg-navy-950">{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">Budget / Price Range</label>
                      <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-navy-950 border border-white/10 text-white/70 text-sm px-4 py-3 outline-none focus:border-gold-500 transition-colors">
                        {["$600K – $700K", "$700K – $800K", "$800K – $900K", "$900K – $1M", "$1M – $1.1M", "$1.1M – $1.2M", "$1.2M – $1.3M", "$1.3M – $1.4M", "$1.4M – $1.5M", "$1.5M – $2M", "$2M – $3M", "$3M – $4M", "$4M – $5M", "$5M+", "Prefer not to say"].map((r) => (
                          <option key={r} className="bg-navy-950">{r}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">Message *</label>
                      <textarea
                        required
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-navy-950 border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-gold-500 transition-colors placeholder:text-white/20 resize-none"
                        placeholder="Tell us about your property goals, timeline, or any specific requirements..."
                      />
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" id="privacy" className="mt-1 accent-gold-500" required />
                      <label htmlFor="privacy" className="text-white/40 text-xs leading-relaxed">
                        I understand that all information shared will be handled with complete confidentiality.
                      </label>
                    </div>
                    <button type="submit" disabled={isLoading} className="btn-gold w-full py-4 text-sm tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed">
                      {isLoading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
