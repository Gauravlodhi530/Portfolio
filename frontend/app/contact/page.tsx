'use client'

import ContactForm from "../Components/ContactForm";

export default function Contact() {


    return (
    <section className="py-12 px-6 md:px-20">
      {/* <div className="max-w-6xl mx-auto text-center ">
        <h2 className="text-4xl font-bold  mb-6">Contact Me</h2>
        <p className="text-lg mb-10">
          
        </p> */}
        <div>
            <ContactForm/>
        </div>
      {/* </div> */}
    </section>
  );
}
