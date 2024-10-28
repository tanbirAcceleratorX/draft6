import React from 'react';
import { Code2, Rocket, Users, Target } from 'lucide-react';

const BYDP = () => {
  const phases = [
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Ideation & Research",
      description: "Identify market opportunities and validate your product idea through comprehensive research"
    },
    {
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      title: "Design & Development",
      description: "Create wireframes, prototypes, and develop your product with expert guidance"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "User Testing",
      description: "Conduct user testing sessions and iterate based on real feedback"
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
      title: "Launch Strategy",
      description: "Develop and execute a go-to-market strategy for your product"
    }
  ];

  return (
    <section id="bydp" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Build Your Own Product (BYDP)
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transform your idea into a real product through our hands-on BYDP program. Work on a live project and build your portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-blue-900/10 border border-blue-900/20 hover:border-blue-500/50 transition group"
            >
              <div className="mb-4">{phase.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{phase.title}</h3>
              <p className="text-gray-400">{phase.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 rounded-xl bg-blue-900/20 border border-blue-900/40">
          <h3 className="text-xl font-semibold mb-4 text-center text-blue-400">
            What You'll Achieve
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500 mb-2">Portfolio</div>
              <p className="text-gray-300">A real product in your portfolio</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500 mb-2">Experience</div>
              <p className="text-gray-300">Hands-on product development experience</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500 mb-2">Network</div>
              <p className="text-gray-300">Connect with industry experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BYDP;