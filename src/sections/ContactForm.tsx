import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { site } from "../lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const services = [
  "Residential Fencing",
  "Commercial Fencing",
  "Custom Wood Fencing",
  "Security & Privacy Fencing",
  "Pool Fencing",
  "Not sure yet",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      if (!formspreeId) throw new Error("Formspree not configured");
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rb-frame rounded-sm border border-line bg-paper-deep p-8 text-center">
        <CheckCircle2 className="mx-auto text-brand" size={36} strokeWidth={1.5} />
        <h3 className="mt-4 font-display text-xl font-bold text-ink">Request received</h3>
        <p className="mt-2 text-sm text-ink-soft">
          Thanks — we'll get back to you within one business day. For anything urgent, call{" "}
          <a href={site.phoneHref} className="font-semibold text-brand">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-sm border border-line bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-brand"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-sm border border-line bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-brand"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-sm border border-line bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-brand"
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
          What do you need fenced?
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-sm border border-line bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-brand"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Tell us about the project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Property type, rough footage, timeline — whatever you know."
          className="w-full rounded-sm border border-line bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-brand"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-sm bg-brand px-6 py-3.5 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-brand-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" && <Loader2 size={16} className="animate-spin" />}
        {status === "sending" ? "Sending…" : "Request A Quote"}
      </button>

      {status === "error" && (
        <p className="flex items-start gap-2 text-sm text-brand-deep">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          Something went wrong sending the form. Please email us directly at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>{" "}
          or call {site.phone}.
        </p>
      )}
    </form>
  );
}
