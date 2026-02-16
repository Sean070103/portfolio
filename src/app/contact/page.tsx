"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, Loader2, Github, Linkedin } from "lucide-react";

// Custom X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mendozaseanmichaelandrewb2345@gmail.com",
    href: "mailto:mendozaseanmichaelandrewb2345@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Philippines",
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Sean070103", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sean-michael-andrew-mendoza-213223324/", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/Arkinnightshade", label: "X (Twitter)" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmailNodeMailer = async (formData: typeof form) => {
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error("Failed to send message");
      }
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const success = await sendEmailNodeMailer(form);
    if (success) {
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-8 pb-6 sm:pt-12 sm:pb-8 lg:pt-16 lg:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-primary/10 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Get in Touch
            </motion.span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Let&apos;s Start a{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
              Have a project in mind or just want to chat? I&apos;d love to hear from you. 
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 pb-16 sm:py-12 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Contact Info - Left Side */}
            <motion.div
              className="lg:col-span-2 space-y-6 sm:space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Contact cards */}
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-card rounded-xl sm:rounded-2xl border border-border hover:border-primary/30 transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg sm:rounded-xl group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-sm sm:text-base font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 sm:mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-2 sm:gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 sm:p-3 bg-card rounded-lg sm:rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Availability */}
              <motion.div
                className="p-4 sm:p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl sm:rounded-2xl border border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm sm:text-base font-semibold">Available for work</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  I&apos;m currently open to new opportunities and exciting projects. 
                  Let&apos;s discuss how I can help bring your ideas to life.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    className="h-full flex items-center justify-center p-6 sm:p-12 bg-card rounded-2xl sm:rounded-3xl border border-border"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                      >
                        <CheckCircle2 className="w-16 h-16 sm:w-20 sm:h-20 text-green-500 mx-auto mb-4 sm:mb-6" />
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                        Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                      </p>
                      <motion.button
                        onClick={() => setSent(false)}
                        className="px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg sm:rounded-xl font-medium text-sm sm:text-base"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Send Another Message
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="p-4 sm:p-6 lg:p-8 xl:p-10 bg-card rounded-2xl sm:rounded-3xl border border-border"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send a Message</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">{/* Name */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <label className="block text-xs sm:text-sm font-medium mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-background rounded-lg sm:rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm sm:text-base"
                          required
                          disabled={isLoading}
                        />
                      </motion.div>

                      {/* Email */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <label className="block text-xs sm:text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-background rounded-lg sm:rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm sm:text-base"
                          required
                          disabled={isLoading}
                        />
                      </motion.div>
                    </div>

                    {/* Subject */}
                    <motion.div
                      className="mb-4 sm:mb-5"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-xs sm:text-sm font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-background rounded-lg sm:rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm sm:text-base"
                        required
                        disabled={isLoading}
                      />
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      className="mb-5 sm:mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-xs sm:text-sm font-medium mb-2">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={4}
                        className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-background rounded-lg sm:rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none text-sm sm:text-base"
                        required
                        disabled={isLoading}
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50 transition-opacity text-sm sm:text-base"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.01, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
