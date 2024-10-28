import React from 'react';

const mentors = [
  {
    name: "Sarah Johnson",
    role: "Senior PM at Google",
    experience: "10+ years in Product",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200"
  },
  {
    name: "Michael Chen",
    role: "Product Director at Meta",
    experience: "12+ years in Tech",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200"
  },
  {
    name: "Priya Patel",
    role: "PM Lead at Amazon",
    experience: "8+ years in E-commerce",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&h=200"
  },
  {
    name: "David Wilson",
    role: "CPO at Startup",
    experience: "15+ years in Product",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200"
  }
];

const Mentors = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-950 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Learn from Industry Experts
        </h2>

        <div className="flex animate-scroll">
          {[...mentors, ...mentors].map((mentor, index) => (
            <div
              key={index}
              className="flex-none w-72 mx-4"
            >
              <div className="p-6 rounded-xl bg-blue-900/10 border border-blue-900/20 hover:border-blue-500/50 transition group">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-blue-400">{mentor.name}</h3>
                  <p className="text-gray-300 mb-2">{mentor.role}</p>
                  <p className="text-gray-400 text-sm">{mentor.experience}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;