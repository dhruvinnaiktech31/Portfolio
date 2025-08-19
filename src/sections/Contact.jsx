import { useState } from "react";
import Card from "../components/Card";
import Section from "../sections/Section";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // success or error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(""); // reset status

    try {
      const response = await fetch("https://formspree.io/f/mgvzdjbn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message successfully sent!");
        setFormData({ name: "", email: "", message: "" }); // clear form
      } else {
        const data = await response.json();
        setStatus(data.error || "Oops! Something went wrong.");
      }
    } catch (error) {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <Section id="contact" title="Contact" subtitle="Have a project or role in mind? Let's talk.">
      <Card className="p-6">
        <form className="grid md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <label className="text-sm">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your name"
              required
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="you@email.com"
              required
            />
          </div>
          <div className="md:col-span-2 grid gap-2">
            <label className="text-sm">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Tell me a bit about your project or role..."
              required
            />
          </div>
          <div className="md:col-span-2 flex items-center justify-between">
            <div className="flex gap-3 text-sm text-neutral-600 dark:text-neutral-400">
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">GitHub</a>
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">Email</a>
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl 
    border border-neutral-300 dark:border-neutral-700 
    text-neutral-900 dark:text-neutral-100 
    transition duration-300
    hover:shadow-[0_0_15px_black] dark:hover:shadow-[0_0_15px_white]"
            >
              Send
            </button>
          </div>
          {status && (
            <div className="md:col-span-2 text-center mt-2 text-sm text-green-500 dark:text-green-400">
              {status}
            </div>
          )}
        </form>
      </Card>
    </Section>
  );
}

