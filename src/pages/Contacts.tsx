import  { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const subject = encodeURIComponent("Inquiry from " + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`);
    window.location.href = `mailto:info@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Contact Me</h2>
          <p className="mt-2 text-lg text-gray-500 dark:text-gray-300">
            I'm happy to hear from you! Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section - Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Phone</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">0828538980</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Email</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">chanin.bu@kkumail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Address</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                27/5 ม.11 ต.หมากแข้ง อ.เมืองอุดรธานี จังหวัดอุดรธานี
              </p>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                placeholder="Your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full py-4 text-xl bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50 transform hover:scale-[1.05] active:scale-[0.95] dark:hover:bg-indigo-500"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
