import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Support = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="p-8 max-w-xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-accent drop-shadow-lg">Support</h1>
      <p className="mb-8 text-center text-lg text-gray-300">Need help? Contact us below and our team will get back to you!</p>
      <form onSubmit={handleSubmit} className="glass-card p-6 rounded-2xl shadow-xl space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-glass-bg border border-accent focus:outline-none focus:ring-2 focus:ring-accent text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-glass-bg border border-accent focus:outline-none focus:ring-2 focus:ring-accent text-white"
        />
        <textarea
          name="message"
          placeholder="How can we help you?"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-glass-bg border border-accent focus:outline-none focus:ring-2 focus:ring-accent text-white"
        />
        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.03 }}
          type="submit"
          className="w-full bg-accent text-white py-3 rounded-lg font-bold text-lg shadow hover:bg-accent-dark transition-colors"
        >
          Send Message
        </motion.button>
        {sent && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-center font-semibold mt-2">
            Thank you! Your message has been sent.
          </motion.div>
        )}
      </form>
      <div className="mt-8 text-center text-gray-400 text-sm">
        <span>Or email us at <a href="mailto:support@apparelstore.com" className="underline text-accent">support@apparelstore.com</a></span>
      </div>
    </motion.div>
  );
};

export default Support;
