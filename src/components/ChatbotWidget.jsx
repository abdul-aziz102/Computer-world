/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import Chat from "./Chat";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot } from "react-icons/fa";

// Enhanced AI Icon for Widget
const EnhancedAIIcon = ({ size = 14, className = "" }) => (
  <motion.div
    className={`w-${size} h-${size} bg-linear-to-br from-purple-500 via-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50 ${className}`}
    whileHover={{ scale: 1.1, rotate: 5 }}
    animate={{
      boxShadow: [
        "0 0 20px 0 rgba(147, 51, 234, 0.6)",
        "0 0 30px 10px rgba(147, 51, 234, 0.3)",
        "0 0 20px 0 rgba(147, 51, 234, 0.6)"
      ]
    }}
    transition={{
      boxShadow: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop"
      }
    }}
  >
    <FaRobot className="text-white text-lg" />
    <motion.div
      className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.div>
);

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsPulsing(false);
  };

  return (
    <>
      {/* Enhanced Floating Chat Button */}
      <motion.div
        onClick={handleToggle}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 text-white rounded-2xl shadow-2xl shadow-purple-700/60 cursor-pointer hover:shadow-3xl z-[9999] flex items-center justify-center group backdrop-blur-sm border border-purple-400/30"
        whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: isPulsing 
            ? [
                "0 0 0 0 rgba(147, 51, 234, 0.8)",
                "0 0 0 20px rgba(147, 51, 234, 0)",
                "0 0 0 40px rgba(147, 51, 234, 0)",
              ]
            : "0 20px 40px rgba(147, 51, 234, 0.4)",
          y: [0, -5, 0]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: isPulsing ? Infinity : 0,
            repeatType: "loop",
          },
          y: {
            duration: 3,
            repeat: Infinity,
            repeatType: "loop"
          }
        }}
      >
        <div className="relative">
          {isOpen ? (
            <X size={24} className="text-white group-hover:scale-110 transition-transform" />
          ) : (
            <EnhancedAIIcon size={14} />
          )}
        </div>
        
        {/* Enhanced Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-20 bottom-1/2 translate-y-1/2 bg-gray-900/90 text-white text-sm px-4 py-2 rounded-xl backdrop-blur-sm border border-gray-700 pointer-events-none whitespace-nowrap"
        >
          💬 Chat with Institute AI
          <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-3 h-3 bg-gray-900/90 rotate-45 border-r border-b border-gray-700"></div>
        </motion.div>
      </motion.div>

      {/* Enhanced Chat Window with Glass Morphism */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.9 }}
            transition={{ 
              type: "spring",
              damping: 25,
              stiffness: 300
            }}
            className="fixed bottom-28 right-6 w-[95vw] max-w-[440px] h-[75vh] min-h-[520px] max-h-[720px] bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-purple-900/40 overflow-hidden flex flex-col z-[9999] border border-purple-500/30"
          >
            {/* Enhanced Header with Gradient */}
            <div className="bg-gradient-to-r from-gray-900 via-purple-900/50 to-gray-900 text-white p-5 border-b border-purple-500/30 relative overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
              </div>
              
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <EnhancedAIIcon size={12} />
                  </div>
                  <div>
                    <h2 className="font-bold text-xl text-white bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                      Institute Assistant
                    </h2>
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-lg shadow-green-500/50"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <p className="text-sm text-purple-200">Online • Ready to help</p>
                    </div>
                  </div>
                </div>
                
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-xl flex items-center justify-center transition-all duration-300 group border border-purple-500/30 backdrop-blur-sm"
                >
                  <X size={18} className="group-hover:scale-110 transition-transform" />
                </motion.button>
              </div>
            </div>

            {/* Chat Content */}
            <div className="flex-1 overflow-hidden bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80">
              <Chat />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;