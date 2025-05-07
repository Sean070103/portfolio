"use client";

import { useState } from "react";
import { ContactIcons } from "../about/ContactIcons";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
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
    
    

    const success = await sendEmailNodeMailer(form);
    if (success) {
      setSent(true);
      setForm({ name: "", email: "", website: "", message: "" }); // Reset form
    }

    setIsLoading(false);
  };

  return (
    <main className="container mx-auto px-4 py-20 min-h-[80vh] flex flex-col md:flex-row gap-12">
      <section className="flex-1 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Contact Me</h1>
        <h2 className="text-sm tracking-widest font-semibold mb-2 uppercase text-secondary">
          Let&apos;s Connect
        </h2>
        <p className="mb-6 max-w-md text-muted-foreground">
          Have a project in mind, want to collaborate, or just want to say
          hello? Fill out the form and I&apos;ll get back to you soon!
        </p>
        <div className="mt-8 text-muted-foreground">
          <div className="flex gap-6 mt-6">
            {ContactIcons.map(
              ({
                icon,
                label,
                href,
              }: {
                icon: React.ReactNode;
                label: string;
                href: string;
              }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:scale-110 focus:outline-none transition-transform"
                >
                  {icon}
                </a>
              )
            )}
          </div>
        </div>
      </section>
      <section className="flex-1 flex flex-col justify-center">
        {sent ? (
          <div className="p-8 card text-center animate-fade-in">
            <div className="flex flex-col items-center gap-4">
              <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" />
              <h2 className="text-2xl font-bold text-foreground">Thank you!</h2>
              <p className="mb-0 text-muted-foreground">
                Your message has been sent. I&apos;ll reply as soon as possible.
              </p>
              <Button
                variant="outline"
                onClick={() => setSent(false)}
                className="mt-4"
              >
                Send another message
              </Button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-card p-8 rounded-lg border border-border shadow-sm"
          >
            <div className="space-y-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <input
                type="text"
                name="website"
                placeholder="Website (optional)"
                value={form.website}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <textarea
                name="message"
                placeholder="Tell me about your project or message..."
                value={form.message}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors min-h-[120px] resize-y"
                required
                disabled={isLoading}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 px-4 rounded-md bg-[#333333] text-white dark:bg-white dark:text-[#333333] transition-colors hover:opacity-90 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending...</span>
                </div>
              ) : (
                "Connect"
              )}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
