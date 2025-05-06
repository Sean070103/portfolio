"use client";

import { useState } from "react";
import { ContactIcons } from '../about/ContactIcons';

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", website: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can integrate with an API or service like Nodemailer
    setSent(true);
  };

  return (
    <main className="container mx-auto px-4 py-20 min-h-[80vh] flex flex-col md:flex-row gap-12">
      <section className="flex-1 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <h2 className="text-sm tracking-widest font-semibold mb-2 uppercase text-secondary">Let&apos;s Connect</h2>
        <p className="mb-6 max-w-md text-gray-500">
          Have a project in mind, want to collaborate, or just want to say hello? Fill out the form or email me directly and I&apos;ll get back to you soon!
        </p>
        <div className="mt-8 text-sm text-gray-500">
          <span className="font-semibold">OR email me at:</span>
          <br />
          <a href="mailto:mendozaseanmichaelandrewb2345@gmail.com" className="text-primary hover:underline">mendozaseanmichaelandrewb2345@gmail.com</a>
          <div className="flex gap-6 mt-6">
            {ContactIcons.map(({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:scale-110 focus:outline-none"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="flex-1 flex flex-col justify-center">
        {sent ? (
          <div className="p-8 card text-center">
            <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
            <p className="mb-0">Your message has been sent. I&apos;ll reply as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 bg-card p-8 rounded-lg border">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              required
            />
            <input
              type="text"
              name="website"
              placeholder="Website (optional)"
              value={form.website}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            />
            <textarea
              name="message"
              placeholder="Tell me about your project or message..."
              value={form.message}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground min-h-[120px]"
              required
            />
            <button
              type="submit"
              className="px-8 py-2 bg-primary text-primary-foreground rounded hover:opacity-80 transition-all font-semibold"
            >
              Send
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
