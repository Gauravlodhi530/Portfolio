import ServiceCard from "@/app/Components/ServicesCard";

export default function ServicesSection() {
    const services = [
        {
            title: "Web Development",
            description: "Full-stack web development using modern technologies like React, Next.js, Node.js, and more. Creating responsive, scalable, and high-performance web applications.",
            icon: "💻",
            features: ["Frontend Development", "Backend Development", "API Integration", "Database Design"]
        },
        {
            title: "UI/UX Design",
            description: "Creating intuitive and beautiful user interfaces with focus on user experience. From wireframes to high-fidelity prototypes and design systems.",
            icon: "🎨",
            features: ["User Interface Design", "User Experience Design", "Prototyping", "Design Systems"]
        },
        // {
        //     title: "SEO Optimization",
        //     description: "Improving website visibility and ranking in search engines. Technical SEO, on-page optimization, and performance improvements.",
        //     icon: "🔍",
        //     features: ["Technical SEO", "On-page Optimization", "Performance", "Analytics"]
        // },
        {
            title: "Digital Marketing",
            description: "Comprehensive digital marketing strategies including social media, content marketing, and email campaigns to grow your online presence.",
            icon: "📈",
            features: ["Social Media Marketing", "Content Strategy", "Email Marketing", "Analytics"]
        },
      
    ];

    return (
        <section className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        My <span className="text-orange-400">Services</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        I offer comprehensive digital solutions to help businesses and individuals 
                        establish a strong online presence and achieve their goals.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard 
                            key={index} 
                            data={service} 
                            index={index}
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16 animate-fade-in animation-delay-800">
                    <p className="text-gray-400 mb-6">
                        Ready to start your project? Let's discuss how I can help you achieve your goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="/contact" 
                            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Get Started
                        </a>
                        <a 
                            href="/portfolio" 
                            className="px-8 py-4 border-2 border-gray-600 text-white rounded-lg hover:bg-gray-800 hover:border-orange-500 transition-all duration-300"
                        >
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
