"use client";

import { useState } from "react";

export default function InterestFormPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "fan",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-display font-bold text-primary uppercase">Sign Up</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Stay connected with USYD Wrestling. Sign up to receive updates on matches, events,
          recruiting, and more.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-display uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-dark"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-display uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-dark"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-display uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-dark"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-display uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-dark"
            />
          </div>

          <div>
            <label className="block text-sm font-display uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1">
              I am a...
            </label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-dark"
            >
              <option value="fan">Fan / Supporter</option>
              <option value="athlete">Prospective Wrestler</option>
              <option value="parent">Parent</option>
              <option value="alumni">Alumni</option>
              <option value="media">Media</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-display uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1">
              Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-dark resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-secondary text-dark font-display font-bold uppercase px-8 py-3 text-sm tracking-wider hover:bg-secondary/90 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
