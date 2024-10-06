import { useState } from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, input]);
      setInput(""); // Clear the input field
    }
  };

  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 flex flex-col"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.7 }}
    >
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Gisty Chat</h1>
      </header>

      <div className="flex-grow p-4 overflow-y-auto">
        <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-2">Chat Room</h2>
          <div className="h-64 overflow-y-auto border border-gray-300 rounded-lg p-2">
            {messages.map((message, index) => (
              <div key={index} className="mb-2">
                <p className="bg-gray-200 p-2 rounded-lg">{message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 bg-white shadow-md">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </motion.div>
  );
};

export default Home;
