import React, { useState } from 'react';
import { MessageCircle, X, Send, ChevronDown } from 'lucide-react';

interface QA {
  question: string;
  answer: string;
}

const predefinedQA: QA[] = [
  {
    question: "How does carbon offsetting work?",
    answer: "Carbon offsetting works by balancing your carbon emissions through investing in projects that reduce or capture CO₂. When you purchase carbon offsets, you're funding projects like our green farms that actively remove carbon from the atmosphere."
  },
  {
    question: "What types of plants are most effective for carbon capture?",
    answer: "Trees like Oak, Pine, and Maple are highly effective at carbon capture. Oak trees can absorb up to 22 kg of CO₂ per year, while Pine trees capture around 20 kg annually. Fast-growing bamboo is also excellent, capturing about 12 kg of CO₂ per year."
  },
  {
    question: "How is the carbon offset price calculated?",
    answer: "Carbon offset prices are calculated based on factors including the type and size of the green project, its carbon capture capacity, and market demand. Prices typically range from $15 to $45 per metric ton of CO₂ offset, depending on the project type and verification standards."
  },
  {
    question: "What are the benefits for industries?",
    answer: "Industries benefit through regulatory compliance, improved ESG ratings, and enhanced corporate reputation. They can meet emission reduction targets, attract environmentally conscious investors, and potentially receive tax benefits while contributing to global sustainability goals."
  },
  {
    question: "How is carbon capture verified and measured?",
    answer: "Carbon capture is verified through scientific measurements and monitoring systems. We use standardized methodologies to calculate absorption rates based on plant type, age, and growth conditions. Regular audits and satellite imagery help verify the ongoing effectiveness of offset projects."
  }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const handleQuestionSelect = (question: string) => {
    setMessages([...messages, { text: question, isUser: true }]);
    const qa = predefinedQA.find(qa => qa.question === question);
    if (qa) {
      setTimeout(() => {
        setMessages(prev => [...prev, { text: qa.answer, isUser: false }]);
      }, 500);
    }
    setSelectedQuestion('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && !isMinimized && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-96 max-h-[600px] flex flex-col">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Carbon Market Assistant</h3>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setIsMinimized(true);
                  setIsOpen(false);
                }}
                className="hover:bg-green-700 p-1 rounded"
              >
                <ChevronDown className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-green-700 p-1 rounded"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px]">
            {messages.length === 0 ? (
              <div className="text-gray-500 text-center">
                Select a question below to get started
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Question Selection */}
          <div className="border-t p-4">
            <select
              value={selectedQuestion}
              onChange={(e) => handleQuestionSelect(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="">Select a question...</option>
              {predefinedQA.map((qa, index) => (
                <option key={index} value={qa.question}>
                  {qa.question}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {isMinimized && (
        <button
          onClick={() => {
            setIsMinimized(false);
            setIsOpen(true);
          }}
          className="bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition-colors flex items-center gap-2"
        >
          <MessageCircle className="h-5 w-5" />
          <span>Chat with us</span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;