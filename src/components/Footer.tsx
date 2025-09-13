import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold"> LearnSphere   </span>
            </div>
            <p className="text-secondary-300 mb-4">
              🚀 Transform your future with world-class education that breaks barriers! 
              Join thousands of successful learners who've revolutionized their careers through our cutting-edge courses. 
              Your journey to excellence starts here - anywhere, anytime, at your own pace.
            </p>
            <div className="space-y-3">
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/akhil_singh__79/" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-white transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/akhilsingh79/" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-white transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <div className="flex items-center space-x-2 text-secondary-300">
                <Mail className="w-4 h-4" />
                <a href="mailto:akhil22btcs0239@gmail.com" className="hover:text-white transition-colors duration-200">
                  akhil22btcs0239@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Data Science
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-secondary-300">akhil22btcs0239@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-secondary-300">+91 7985094941</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-secondary-300">Prayagraj, Uttar Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              © 2024 EduLearn. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-secondary-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-secondary-400 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 