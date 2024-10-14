import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-10 h-10 mr-2 rounded-lg"
            />
            <span className="text-2xl font-bold text-gray-800">从今以后</span>
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="flex items-center text-gray-600 hover:text-gray-800"
            >
              <Home className="w-5 h-5 mr-1" />
              首页
            </Link>
            <Link
              to="/about"
              className="flex items-center text-gray-600 hover:text-gray-800"
            >
              <User className="w-5 h-5 mr-1" />
              关于
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
