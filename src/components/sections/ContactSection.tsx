"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send, CheckCircle2, MapPin, Mail } from "lucide-react";
import { site } from "@/content/site";
import { SectionHeading, Panel } from "@/components/editorial/primitives";
import { useScrollReveal } from "@/hooks/useAnime";

export default function ContactSection() {
  const ref = useScrollReveal<HTMLElement>();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setError("Something went wrong. Email me directly instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-16 md:py-24 scroll-mt-20">
      <div className="container-editorial">
        <SectionHeading
          number="08"
          label="Contact"
          title="Let's build the next panel."
          subtitle="Tell me about the product, the problem, or the automation you're chasing."
        />

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-4" data-reveal>
            <Panel className="p-6">
              <p className="index-badge mb-3 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" /> Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="text-sm break-all hover:text-accent transition-colors"
              >
                {site.email}
              </a>
            </Panel>
            <Panel className="p-6">
              <p className="index-badge mb-3 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" /> Location
              </p>
              <p>{site.location}</p>
            </Panel>
            <Panel className="p-6 border-accent/40">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                {site.availability}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider border-2 border-border px-3 py-2 hover:border-accent hover:text-accent transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </Panel>
          </div>

          <div className="lg:col-span-8" data-reveal>
            <Panel thick className="p-6 sm:p-8 md:p-10">
              {sent ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-14 h-14 text-accent mx-auto mb-4" />
                  <h3 className="font-display text-3xl mb-2">Message sent</h3>
                  <p className="text-muted-foreground mb-6">
                    I&apos;ll get back within 24 hours.
                  </p>
                  <button type="button" className="btn btn-ghost" onClick={() => setSent(false)}>
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <h3 className="font-display text-2xl md:text-3xl mb-2">Send a message</h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="field-label" htmlFor="name">
                        Name
                      </label>
                      <input
                        id="name"
                        className="field"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        disabled={loading}
                      />
                    </div>
                    <div>
                      <label className="field-label" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="field"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="field-label" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="field"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="field min-h-[140px] resize-y"
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      disabled={loading}
                    />
                  </div>
                  {error ? <p className="text-sm text-accent">{error}</p> : null}
                  <button type="submit" className="btn btn-accent w-full sm:w-auto" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </Panel>
          </div>
        </div>
      </div>
    </section>
  );
}
