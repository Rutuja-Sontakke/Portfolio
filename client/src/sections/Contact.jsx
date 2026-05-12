import { useState } from "react";
import axios from "axios";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/contact",
        form
      );

      alert(res.data.message);

      setForm({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {

      alert("Failed to send message");

    }

  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24"
    >

      <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center">
        Contact Me
      </h2>

      <div className="glass rounded-3xl p-8 md:p-12 mt-16 max-w-4xl w-full">

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-transparent border border-gray-600 rounded-xl p-4 outline-none"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-transparent border border-gray-600 rounded-xl p-4 outline-none"
          />

          <textarea
            rows="6"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="bg-transparent border border-gray-600 rounded-xl p-4 outline-none"
          ></textarea>

          <button
            className="bg-purple-600 py-4 rounded-xl hover:bg-purple-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;