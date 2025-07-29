import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone: number;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>();


  const submitHandler = async (data: FormData, e?: React.BaseSyntheticEvent) => {
    e?.preventDefault();
    console.log(data)

    try {
      const response = await axios.post("/api/contact", data);
      console.log(response);


      if (response.status === 200) {
        alert("Message sent successfully");
        reset();
      } else {
        alert("Failed to send message");
      }
    } catch (error: any) {
      console.error("Error sending message:", error.response?.error || error.message);
      // alert("Something went wrong");
    }
  };

  return (
    <section className="text-white py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-2">Contact me</h2>
      <p className="text-center text-gray-400 mb-8">Let’s talk about your project</p>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="grid grid-cols-1 gap-6 max-w-4xl mx-auto"
      >
        <input
          {...register('name', { required: true })}
          type="text"
          placeholder="Your Name"
          className="bg-zinc-900 text-white placeholder-gray-400 border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {errors.name && <p className="text-red-500">Please enter your name.</p>}

        <input
          {...register('email', {
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
          type="email"
          placeholder="Your Email"
          className="bg-zinc-900 text-white placeholder-gray-400 border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {errors.email && <p className="text-red-500">Please enter a valid email address</p>}

        <input
          {...register('phone', {
            required: true,
            minLength: 10,
            maxLength: 15,
            pattern: /^[0-9]+$/,
          })}
          type="tel"
          placeholder="Phone Number"
          className="bg-zinc-900 text-white placeholder-gray-400 border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {errors.phone && <p className="text-red-500">Please enter a valid phone number</p>}

        <textarea
          {...register('message')}
          placeholder="Your Message"
          className="bg-zinc-900 text-white placeholder-gray-400 border border-gray-700 rounded-md p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
        ></textarea>

        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-6 py-2 rounded-md"
          >
            Send Your Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
