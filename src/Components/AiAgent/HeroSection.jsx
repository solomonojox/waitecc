import React from 'react';
import { motion } from 'framer-motion';
import WhatsApp from '../WhatsApp';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const chatBubbleVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.5
    }
  })
};

export default function HeroSection() {
  return (
    <div className="bg-silver text-charcoal container mx-auto md:px-6">
      <div className="container mx-auto px-4 py-10 md:py-16">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left content - Text and CTAs */}
          <motion.div className="md:w-1/2 space-y-6" variants={itemVariants}>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              whileHover={{ scale: 1.01 }}
            >
              Boakye AI: Let Your Business{" "}
              <motion.span
                className="text-orange"
                animate={{ color: ["#FF7D4D"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Chat
              </motion.span>
              ,{" "}
              <motion.span
                className="text-green-500"
                animate={{ color: ["#1A9988", "#4ADE80", "#1A9988"] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                Sell
              </motion.span>{" "}
              &{" "}
              <motion.span
                className="text-blue-500"
                animate={{ color: ["#2D3142"] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                Close
              </motion.span>{" "}
              – While You Sleep
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-charcoal"
              whileInView={{ opacity: [0.5, 1] }}
              transition={{ duration: 1 }}
            >
              Unify all your customer conversations, automate responses, and collect payments powered by AI that speaks Pidgin, Yoruba, Hausa, and more.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={containerVariants}
            >
              <motion.button
                className="bg-primary text-white hover:bg-orange/80 font-semibold py-3 px-6 rounded-lg shadow-lg transition-all"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 107, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
                onClick={() => window.open('https://forms.gle/fr2Pi23Dco3sbySCA', '_blank')}
              >
                Book a Demo
              </motion.button>

              <WhatsApp />
            </motion.div>
          </motion.div>

          {/* Right content - Animated GIF */}
          <motion.div
            className="md:w-1/2 flex justify-center md:h-[450px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-2xl shadow-2xl"
              whileHover={{ y: -5 }}
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 flex gap-2">
                <motion.div
                  className="h-3 w-3 bg-red-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                <motion.div
                  className="h-3 w-3 bg-yellow-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                ></motion.div>
                <motion.div
                  className="h-3 w-3 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                ></motion.div>
              </div>

              {/* Chatbot simulation */}
              <div className="relative bg-gray-800 rounded-xl overflow-hidden">
                <div className="flex border-b border-gray-700 p-2">
                  <div className="flex space-x-3 items-center">
                    <motion.div
                      className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                    >
                      G
                    </motion.div>
                    <div className="text-white font-medium">Boakye AI Assistant</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-1 p-1">
                  {/* WhatsApp Chat */}
                  <motion.div
                    className="bg-gray-900 rounded-lg p-2 h-full hidden md:block"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                  >
                    <div className="flex items-center mb-2">
                      <motion.div
                        className="w-4 h-4 bg-green-500 rounded-full mr-2"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      ></motion.div>
                      <span className="text-xs text-white">WhatsApp</span>
                    </div>
                    <div className="space-y-2">
                      <motion.div
                        className="bg-gray-800 text-white p-2 rounded-lg text-xs"
                        custom={0}
                        variants={chatBubbleVariants}
                      >
                        Hello, how can I help you today?
                      </motion.div>
                      <motion.div
                        className="bg-green-800 text-white p-2 rounded-lg text-xs ml-auto"
                        custom={1}
                        variants={chatBubbleVariants}
                      >
                        I want to buy the new product
                      </motion.div>
                      <motion.div
                        className="bg-gray-800 text-white p-2 rounded-lg text-xs"
                        animate={{
                          scale: [1, 1.02, 1],
                          boxShadow: [
                            "0 0 0 rgba(0,0,0,0)",
                            "0 2px 5px rgba(0,0,0,0.2)",
                            "0 0 0 rgba(0,0,0,0)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        custom={2}
                        variants={chatBubbleVariants}
                      >
                        Great! I can help with that. Would you like to see our available options?
                      </motion.div>
                      <motion.div
                        className="bg-green-800 text-white p-2 rounded-lg text-xs ml-auto"
                        custom={1}
                        variants={chatBubbleVariants}
                      >
                        What are the payment options?
                      </motion.div>
                      <motion.div
                        className="bg-gray-800 text-white p-2 rounded-lg text-xs"
                        animate={{
                          scale: [1, 1.02, 1],
                          boxShadow: [
                            "0 0 0 rgba(0,0,0,0)",
                            "0 2px 5px rgba(0,0,0,0.2)",
                            "0 0 0 rgba(0,0,0,0)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        custom={2}
                        variants={chatBubbleVariants}
                      >
                        We pay through credit card, debit card, or PayPal.
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Instagram Chat */}
                  <motion.div
                    className="bg-gradient-to-br from-purple-900 to-pink-600 rounded-lg p-2 h-64"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                  >
                    <div className="flex items-center mb-2">
                      <motion.div
                        className="w-4 h-4 bg-pink-500 rounded-full mr-2"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
                      ></motion.div>
                      <span className="text-xs text-white">Instagram</span>
                    </div>
                    <div className="space-y-2">
                      <motion.div
                        className="bg-gray-800 text-white p-2 rounded-lg text-xs"
                        custom={0.3}
                        variants={chatBubbleVariants}
                      >
                        Welcome to Gistly! How may I assist you?
                      </motion.div>
                      <motion.div
                        className="bg-purple-800 text-white p-2 rounded-lg text-xs ml-auto"
                        custom={0.6}
                        variants={chatBubbleVariants}
                      >
                        How much is delivery to Lagos?
                      </motion.div>
                      <motion.div
                        className="bg-gray-800 text-white p-2 rounded-lg text-xs"
                        animate={{
                          scale: [1, 1.02, 1],
                          boxShadow: [
                            "0 0 0 rgba(0,0,0,0)",
                            "0 2px 5px rgba(0,0,0,0.2)",
                            "0 0 0 rgba(0,0,0,0)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        custom={0.9}
                        variants={chatBubbleVariants}
                      >
                        Delivery to Lagos is ₦2,000. Would you like to place an order now?
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Facebook Chat */}
                  <motion.div
                    className="bg-blue-900 rounded-lg p-2 h-64"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                  >
                    <div className="flex items-center mb-2">
                      <motion.div
                        className="w-4 h-4 bg-blue-500 rounded-full mr-2"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.4 }}
                      ></motion.div>
                      <span className="text-xs text-white">Facebook</span>
                    </div>
                    <div className="space-y-2">
                      <motion.div
                        className="bg-gray-800 text-white p-2 rounded-lg text-xs"
                        custom={0.6}
                        variants={chatBubbleVariants}
                      >
                        Hi there! Thanks for contacting us.
                      </motion.div>
                      <motion.div
                        className="bg-blue-800 text-white p-2 rounded-lg text-xs ml-auto"
                        custom={0.9}
                        variants={chatBubbleVariants}
                      >
                        Abeg, una dey accept Pidgin?
                      </motion.div>
                      <motion.div
                        className="bg-gray-800 text-white p-2 rounded-lg text-xs"
                        animate={{
                          scale: [1, 1.02, 1],
                          boxShadow: [
                            "0 0 0 rgba(0,0,0,0)",
                            "0 2px 5px rgba(0,0,0,0.2)",
                            "0 0 0 rgba(0,0,0,0)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        custom={1.2}
                        variants={chatBubbleVariants}
                      >
                        Yes o! We dey speak Pidgin. Wetin you need help with?
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}