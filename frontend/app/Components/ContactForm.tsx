import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiMessageSquare, FiSend, FiMapPin, FiClock, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const submitHandler = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await axios.post("/api/contact", data);

      if (response.status === 200) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus('idle'), 3000);
        // alert("Message sent successfully");
        

      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error: any) {
      console.error("Error sending message:", error.response?.error || error.message);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-orange-400">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? I'd love to hear about your ideas and help bring them to life.
            Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8 animate-fade-in animation-delay-200"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you have a project in mind or just want to chat about technology,
                I'm always open to new opportunities and interesting conversations.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <div className="p-3 bg-orange-500/20 rounded-lg">
                  <FiMapPin className="text-orange-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-400">Remote / Worldwide</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <div className="p-3 bg-orange-500/20 rounded-lg">
                  <FiClock className="text-orange-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Availability</h4>
                  <p className="text-gray-400">Available for new projects</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <div className="p-3 bg-orange-500/20 rounded-lg">
                  <FiMail className="text-orange-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400">gauravlodhi530@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Gauravlodhi530"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-orange-500/50 hover:bg-orange-500/20 transition-all duration-300"
                >
                  <FiGithub className="text-gray-400 hover:text-orange-400 text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gaurav-lodhi9090/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-orange-500/50 hover:bg-orange-500/20 transition-all duration-300"
                >
                  <FiLinkedin className="text-gray-400 hover:text-orange-400 text-xl" />
                </a>
                <a
                  href="https://x.com/_Gaurav_Lodhi_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-orange-500/50 hover:bg-orange-500/20 transition-all duration-300"
                >
                  <FiTwitter className="text-gray-400 hover:text-orange-400 text-xl" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="animate-fade-in animation-delay-400"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    <FiUser className="inline mr-2 text-orange-400" />
                    Full Name
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-gray-700/50 text-white placeholder-gray-400 border border-gray-600/50 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    <FiMail className="inline mr-2 text-orange-400" />
                    Email Address
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full bg-gray-700/50 text-white placeholder-gray-400 border border-gray-600/50 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    <FiPhone className="inline mr-2 text-orange-400" />
                    Phone Number
                  </label>
                  <input
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9+\-\s()]+$/,
                        message: 'Please enter a valid phone number'
                      }
                    })}
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full bg-gray-700/50 text-white placeholder-gray-400 border border-gray-600/50 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    <FiMessageSquare className="inline mr-2 text-orange-400" />
                    Message
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full bg-gray-700/50 text-white placeholder-gray-400 border border-gray-600/50 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-6 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center"
                    >
                      <p className="font-semibold">✅ Message sent successfully!</p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center"
                    >
                      <p className="font-semibold">❌ Failed to send message. Try again.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
