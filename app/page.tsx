"use client";

import Image from "next/image";
import { Background } from "./components/Background";
import React, { useState, useEffect } from 'react';

const AnimatedChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: 'alice', color: 'bg-blue-500', message: 'Hey everyone! 👋', visible: false },
    { id: 2, user: 'bob', color: 'bg-green-500', message: "What's up? Ready for the meeting?", visible: false },
    { id: 3, user: 'charlie', color: 'bg-red-500', message: 'Just sent the designs! 🎨', visible: false },
    { id: 4, user: 'david', color: 'bg-orange-500', message: 'Looks amazing! 🔥', visible: false }
  ]);

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage(prev => {
        if (prev < messages.length - 1) {
          // Show next message
          setMessages(msgs => 
            msgs.map((msg, index) => ({
              ...msg,
              visible: index <= prev
            }))
          );
          return prev + 1;
        } else {
          // Reset all messages and counter
          setMessages(msgs => 
            msgs.map(msg => ({ ...msg, visible: false }))
          );
          return 0;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [messages.length]);

  // Show current message
  useEffect(() => {
    setMessages(msgs => 
      msgs.map((msg, index) => ({
        ...msg,
        visible: index <= currentMessage
      }))
    );
  }, [currentMessage]);

  return (
    <div className="bg-gray-950/80 backdrop-blur-sm border border-gray-800/50 rounded-lg w-96 h-[450px] p-5">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-800/50">
        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">Q</span>
        </div>
        <span className="text-white font-semibold text-lg">Quoro</span>
        <div className="ml-auto flex gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-400">4 online</span>
        </div>
      </div>
      
      {/* Chat messages */}
      <div className="space-y-4 mb-20">
        {messages.map((msg, index) => (
          <div 
            key={msg.id}
            className={`flex items-start gap-3 transition-all duration-500 ${
              msg.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className={`w-8 h-8 ${msg.color} rounded-full flex-shrink-0`}></div>
            <div>
              <div className="text-sm text-gray-400">{msg.user}</div>
              <div className="text-base text-white">{msg.message}</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Input area */}
      <div className="absolute bottom-5 left-5 right-5">
        <div className="bg-gray-900/90 rounded-lg p-3 text-base text-gray-400 flex items-center gap-2">
          <span>Type a message...</span>
          <div className="ml-auto flex gap-1">
            <div className="w-1 h-5 bg-purple-500 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />
      <div className="relative z-10 flex flex-col xl:flex-row">
        {/* Left side - Hero content */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:ml-24 pt-8 xl:pt-0">
          <div className="max-w-3xl mx-auto xl:mx-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center xl:text-left mb-4">
              CHAT SMARTER WITH
              <br />
              <span 
                className="relative tracking-[0.3rem] sm:tracking-[0.5rem] lg:tracking-[0.7rem] cursor-pointer group bg-gradient-to-b from-gray-100 to-purple-400 bg-clip-text text-transparent block xl:inline xl:-top-6 xl:left-3"
              >
                QUORO
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-8 max-w-2xl text-center xl:text-left mx-auto xl:mx-0">
              Create private chats, join groups, and connect instantly in real-time.
            </p>
            <div className="flex justify-center xl:justify-start">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-colors">
                Let's Talk!
              </button>
            </div>
          </div>

          {/* Chat container */}
          <div className="mt-8 md:mt-12 xl:mt-30 relative max-w-fit mx-auto xl:mx-0">
            <div className="scale-75 sm:scale-90 md:scale-100 origin-center xl:origin-left">
              <AnimatedChat />
              
              {/* Floating user profile */}
              <div className="absolute -top-4 -right-4 bg-gray-950/80 backdrop-blur-sm border border-gray-800/50 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">Y</span>
                  </div>
                  <div>
                    <div className="text-xs text-green-400">● online</div>
                    <div className="text-sm text-white font-semibold">You</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Information container */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 xl:mt-30 xl:mr-20 mt-8">
          <div className="bg-gray-950/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-2xl xl:max-w-none xl:h-[750px]">
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg md:text-2xl font-bold">Q</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Quoro Features</h3>
                  <p className="text-sm md:text-base text-gray-400">Everything you need to chat</p>
                </div>
              </div>

              {/* Feature list */}
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 text-base md:text-lg">✓</span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-base md:text-lg">Real-time Messaging</div>
                    <div className="text-xs md:text-sm text-gray-400">Instant communication</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-base md:text-lg">🔒</span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-base md:text-lg">Private & Secure</div>
                    <div className="text-xs md:text-sm text-gray-400">End-to-end encryption</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 text-base md:text-lg">👥</span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-base md:text-lg">Group Chats</div>
                    <div className="text-xs md:text-sm text-gray-400">Connect with teams</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-400 text-base md:text-lg">📱</span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-base md:text-lg">Cross-Platform</div>
                    <div className="text-xs md:text-sm text-gray-400">Web, mobile, desktop</div>
                  </div>
                </div>
              </div>

              {/* Image placeholder */}
              <div className="flex-1 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl flex items-center justify-center border border-purple-500/20 mb-6 md:mb-8 min-h-[200px] xl:min-h-0">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-600/30 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-purple-300 text-2xl md:text-3xl">💬</span>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base">Chat Experience</p>
                  <p className="text-gray-500 text-xs md:text-sm">Beautiful & Intuitive</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 md:gap-6 pt-6 md:pt-8 border-t border-gray-800/50">
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-white">1M+</div>
                  <div className="text-xs md:text-sm text-gray-400">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-white">99.9%</div>
                  <div className="text-xs md:text-sm text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-white">24/7</div>
                  <div className="text-xs md:text-sm text-gray-400">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}