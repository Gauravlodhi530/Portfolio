import ServiceCard from "@/app/Components/ServicesCard";

export default function ServicesSection() {
    const data = [
        { title: "App Design", description: "Lorem ipsum dolor sit amet, Imperdiet  convallis blandit felis ligula a liquam" },
        { title: "Web Development", 
        description: "Lorem ipsum dolor sit amet, Imperdiet convallis blandit felis ligula a liquam" },

        { title: "UI/UX Design",
        description: "Lorem ipsum dolor sit amet, Imperdiet convallis blandit felis ligula a liquam" },
        
        { title: "SEO Optimization",
        description: "Lorem ipsum dolor sit amet, Imperdiet convallis blandit felis ligula a liquam" },

        { title: "Digital Marketing",
        description: "Lorem ipsum dolor sit amet, Imperdiet convallis blandit felis ligula a liquam" },

        { title: "Content Creation",
        description: "Lorem ipsum dolor sit amet, Imperdiet convallis blandit felis ligula a liquam" }
    ];

    return (
        <div className="min-h-screen  py-16 px-4 md:px-16">
            <h2 className="text-3xl font-semibold text-center mb-2">Services</h2>
            <p className="text-center text-sm text-gray-400 mb-10">
                Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula a liquam
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((service, index) => (
                    <ServiceCard key={index} data={service} />
                ))}
            </div>
        </div>
    );
}
