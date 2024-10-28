import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-blue-900/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">AcceleratorX</h3>
            <p className="text-gray-400">
              Transforming aspiring product managers into industry leaders
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#program" className="hover:text-blue-400 transition">Program</a></li>
              <li><a href="#bydp" className="hover:text-blue-400 transition">BYDP</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contact@acceleratorx.co</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-gray-400 text-sm pt-8 border-t border-blue-900/20">
          © {new Date().getFullYear()} AcceleratorX. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;