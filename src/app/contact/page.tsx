"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("An error occurred. Please try again later.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEmail = async () => {
    const email = "mendozaseanmichaelandrewb2345@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copied to clipboard!");
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12">Contact Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded border bg-card"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 rounded border bg-card"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-2 rounded border bg-card"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2 px-4 rounded hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
          <div className="space-y-4">
            <button
              onClick={handleEmail}
              className="flex items-center space-x-3 w-full p-3 rounded hover:bg-accent transition-colors"
            >
              <MdEmail size={24} />
              <span>mendozaseanmichaelandrewb2345@gmail.com</span>
            </button>
            <a
              href="https://github.com/seanmichael07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 w-full p-3 rounded hover:bg-accent transition-colors"
            >
              <FaGithub size={24} />
              <span>github.com/seanmichael07</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sean-michael-andrew-mendoza-b2345/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 w-full p-3 rounded hover:bg-accent transition-colors"
            >
              <FaLinkedin size={24} />
              <span>linkedin.com/in/sean-michael-andrew-mendoza-b2345</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
