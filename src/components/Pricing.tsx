import React from 'react';
import { Check } from 'lucide-react';

interface PricingProps {
  onEnrollClick: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onEnrollClick }) => {
  const features = [
    "6 months intensive program",
    "1:1 mentorship sessions",
    "Real project experience",
    "Industry certification",
    "Placement assistance",
    "Lifetime community access",
    "Resume building support",
    "Interview preparation"
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-black to-blue-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Investment in Your Future
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl bg-blue-900/10 border border-blue-900/20 p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="text-sm text-blue-400 mb-2">COMPLETE PROGRAM</div>
              <div className="text-4xl font-bold text-white mb-4">₹99,999</div>
              <div className="text-gray-400">or ₹18,000/month with EMI</div>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-300">
                  <Check className="flex-shrink-0 w-5 h-5 text-blue-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onEnrollClick}
              className="w-full bg-blue-600 text-white py-4 px-8 rounded-full hover:bg-blue-700 transition font-semibold"
            >
              Enroll Now
            </button>

            <p className="text-center text-gray-400 mt-4 text-sm">
              100% Money-back guarantee if not satisfied within first 7 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;