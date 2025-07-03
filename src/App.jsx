import React from 'react';
import { Calendar, MessageCircle, Globe, Mail, Twitter, Instagram, Music, Youtube } from 'lucide-react';


export default function MobileProfileApp() {
  const handleButtonClick = (action) => {
    console.log(`${action} clicked`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-purple-300 to-pink-300 p-4">
      <div className="w-full max-w-sm mx-auto pt-10">
        {/* Profile Section */}
        <div className="text-center mb-8">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Name */}
          <h1 className="text-2xl font-bold text-white mb-2">@Camiilemelo</h1>

          {/* Description */}
          <p className="text-white font-bold text-opacity-90 text-sm px-4 leading-relaxed">
            Influenciadora digital
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <a
            href="https://wa.me/5583999618526" // substitua com o número da assessoria
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white bg-opacity-20 backdrop-blur-sm text-white py-4 px-6 rounded-xl flex items-center justify-center space-x-3 hover:bg-opacity-30 transition-all duration-200 border border-white border-opacity-20"
          >
            <img src="/whatsapp.png" alt="" />
            <span className="font-medium">Contato Assessoria</span>
          </a>

          <a
            href="https://www.tiktok.com/@_camilemelo?_t=ZM-8uep48x5x5D&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white bg-opacity-20 backdrop-blur-sm text-white py-4 px-6 rounded-xl flex items-center justify-center space-x-3 hover:bg-opacity-30 transition-all duration-200 border border-white border-opacity-20"
          >
            <img src="/tiktok.png" alt="TikTok" />
            <span className="font-medium">TikTok</span>
          </a>
        </div>


      </div>
    </div>
  );
}