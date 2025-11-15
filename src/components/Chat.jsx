/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaPaperPlane, FaRegClock, FaRobot, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { User, Sparkles, Loader2, BookOpen, Mail, Phone } from "lucide-react";

const Chat = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 **Hello! I'm your AI Assistant** for **Brilliance Academy** 🎓 and **Computer World Institute** 💻. I can provide specific information about our classes, courses, and how we empower students through education. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Enhanced Context with specific response instructions
  const portfolioContext = `
You are a professional AI assistant representing "Brilliance Academy" and "Computer World Institute of Computer Science & Information Technology".

**CRITICAL INSTRUCTIONS:**
- Provide ONLY the information the user specifically asks for
- Keep responses concise and impressive
- Use engaging, professional language
- Format responses with clear headings and bullet points
- Do NOT dump all information at once
- If user asks for contact, give ONLY contact info
- If user asks about courses, list ONLY relevant courses

**Institute Information:**

Brilliance Academy:
- Focus: Achieving excellence through education
- Classes: Kindergarten, Primary & Secondary Classes
- Special Program: English Language Classes For Girls

Computer World Institute:
- Focus: Institute of Computer Science & Information Technology
- Courses: Computer Classes, Web Designing, Shopify, Graphics, Digital Marketing, Ms. Office, E-commerce

Contact Information:
- Phone: 0327-2562944
- Address: [Add your institute address if available]

**Response Rules:**
1. If user asks for phone number → "📞 **Contact Number:** 0327-2562944"
2. If user asks about courses → List only the requested courses with brief benefits
3. If user asks about classes → Provide specific class information only
4. Always end with a call-to-action but keep it brief
5. Use emojis to make responses engaging
6. Maximum 3-4 bullet points per response
`;

  // Enhanced message formatting
  const formatMessageWithLinks = (text) => {
    let processedText = text
      .replace(/\*\*(.*?)\*\*/g, (match, p1) => `<strong class="text-purple-300">${p1}</strong>`)
      .replace(/\*(.*?)\*/g, (match, p1) => `<em class="text-gray-300">${p1}</em>`)
      .replace(/\n/g, '<br/>')
      .replace(/•\s*(.*?)(?=•|$)/g, '<li class="flex items-start gap-2 py-1"><span class="text-purple-400 mt-1">•</span><span>$1</span></li>');
    
    return <span dangerouslySetInnerHTML={{ __html: processedText }} />;
  };

  // Improved text cleaning that preserves formatting
  const cleanAndFormatText = (text) => {
    return text
      .replace(/#{1,6}\s?/g, '') // Remove markdown headings but keep content
      .replace(/```[\s\S]*?```/g, '') // Remove code blocks
      .trim();
  };

  const generateAnswer = async () => {
    if (!question.trim()) return;

    const userMessage = {
      text: question,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setIsTyping(true);

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBFxVRCvOH6b0YNg3-C0oql6z_TgRvl_H4",
        method: "post",
        data: {
          contents: [
            {
              parts: [{ 
                text: `${portfolioContext}\n\nUser Question: ${question}\n\nInstructions: Provide specific, concise answer to what user asked. Do not give extra information.` 
              }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 500, // Limit response length
          }
        },
      });

      const rawText = response.data.candidates[0].content.parts[0].text;
      const formattedText = cleanAndFormatText(rawText);

      setTimeout(() => {
        const aiMessage = {
          text: formattedText,
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMessage]);
        setIsTyping(false);
      }, 1500);
    } catch (err) {
      console.error("Error occurred:", err); 
      setTimeout(() => {
        const fallback = {
          text: "⚡ Sorry, I'm having trouble connecting right now. Please call us directly at **0327-2562944** for immediate assistance!",
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, fallback]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Enhanced quick actions with specific responses
  const handleQuickAction = (action) => {
    let response = "";
    
    switch(action) {
      case "courses":
        response = "💻 **Computer World Institute Courses:**\n• Web Designing & Development\n• Digital Marketing & Shopify\n• Graphics Design & E-commerce\n• MS Office & Computer Basics\n\n🎯 *Which course interests you?*";
        break;
      case "classes":
        response = "🎓 **Brilliance Academy Programs:**\n• Kindergarten (Play Group to Prep)\n• Primary Classes (Grade 1-5)\n• Secondary Classes (Grade 6-10)\n• English Language Classes (For Girls)\n\n🌟 *Building foundations for success!*";
        break;
      case "contact":
        response = "📞 **Get In Touch:**\n**Phone:** 0327-2562944\n\n📍 *Visit us to see our modern facilities and meet our experienced faculty!*";
        break;
      case "english":
        response = "👩‍🎓 **English Language Program:**\n• Exclusive classes for girls\n• Focus on communication skills\n• Modern teaching methods\n• Confidence building\n\n💬 *Unlock your potential with English fluency!*";
        break;
    }

    const actionMessage = {
      sender: "ai",
      text: response,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, actionMessage]);
  };

  // Enhanced AI Icon with animation
  const AIIcon = ({ size = 8, className = "" }) => (
    <div className={`relative w-${size} h-${size} ${className}`}>
      <motion.div
        className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30"
        whileHover={{ scale: 1.05 }}
        animate={{ 
          boxShadow: [
            "0 0 0 0 rgba(147, 51, 234, 0.4)",
            "0 0 0 10px rgba(147, 51, 234, 0)",
            "0 0 0 0 rgba(147, 51, 234, 0)"
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
        <FaRobot className="text-white text-xs" />
      </motion.div>
      <motion.div
        className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

      {/* Enhanced Chat Messages with Glass Effect */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth bg-gradient-to-b from-transparent to-gray-900/50">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            className={`flex gap-3 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            {/* Avatar */}
            <div className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center ${
              msg.sender === "user" 
                ? "bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30" 
                : "bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/30"
            }`}>
              {msg.sender === "user" ? (
                <User size={16} className="text-white" />
              ) : (
                <AIIcon size={10} />
              )}
            </div>

            {/* Message Bubble */}
            <div className={`max-w-[85%] ${msg.sender === "user" ? "items-end" : "items-start"} flex flex-col gap-2`}>
              <motion.div
                className={`px-4 py-3 rounded-3xl backdrop-blur-sm ${
                  msg.sender === "user"
                    ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-md shadow-2xl shadow-blue-500/30"
                    : "bg-gray-800/80 text-gray-100 rounded-bl-md border border-purple-500/30 shadow-2xl shadow-purple-500/20 backdrop-blur-sm"
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {formatMessageWithLinks(msg.text)}
                </p>
              </motion.div>
              
              {/* Timestamp */}
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <FaRegClock size={10} />
                <span>{formatTime(msg.timestamp)}</span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Enhanced Typing Indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex gap-3"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/30 flex items-center justify-center">
                <AIIcon size={10} />
              </div>
              <div className="bg-gray-800/80 rounded-3xl rounded-bl-md px-4 py-3 border border-purple-500/30 shadow-lg backdrop-blur-sm">
                <div className="flex gap-1 items-center">
                  <span className="text-xs text-gray-400 mr-2">AI is thinking</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                    className="w-2 h-2 bg-purple-400 rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 bg-purple-400 rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 bg-purple-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={chatEndRef} />
      </div>

      {/* Enhanced Input Area with Glass Effect */}
      <div className="p-4 border-t border-gray-700/50 bg-gray-900/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Ask about specific courses, classes, or contact info..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && generateAnswer()}
              className="w-full px-4 py-3 pr-12 rounded-2xl border border-gray-600 bg-gray-800/50 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
              disabled={isTyping}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Sparkles size={16} className="text-purple-400" />
            </div>
          </div>
          
          <motion.button
            onClick={generateAnswer}
            disabled={!question.trim() || isTyping}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-2xl shadow-purple-700/30 flex items-center justify-center min-w-[48px] backdrop-blur-sm"
          >
            {isTyping ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <FaPaperPlane size={16} />
            )}
          </motion.button>
        </div>
        
        {/* Enhanced Quick Suggestions */}
        <div className="flex flex-wrap gap-2 mt-3">
          {[
            { text: "Computer Courses", icon: FaLaptopCode, action: "courses" },
            { text: "School Classes", icon: FaGraduationCap, action: "classes" },
            { text: "Contact Info", icon: Phone, action: "contact" },
            { text: "English Classes", icon: BookOpen, action: "english" }
          ].map((suggestion) => (
            <motion.button
              key={suggestion.text}
              onClick={() => handleQuickAction(suggestion.action)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-2 text-xs bg-gray-800/50 text-purple-300 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 border border-purple-500/30 backdrop-blur-sm flex items-center gap-2"
              disabled={isTyping}
            >
              <suggestion.icon size={12} />
              {suggestion.text}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;