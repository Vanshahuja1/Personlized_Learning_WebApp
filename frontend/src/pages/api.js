// src/api.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = 'AIzaSyAzvIrpQ4_F1d7X6lBwtzJCdMqZdvm7_tw';
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 11000,
  responseMimeType: "text/plain",
};

export const generateLearningPath = async (domain, level, description) => {
  const prompt = `Generate a learning path for the domain "${domain}", level "${level}", and description "${description}".`;

  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  try {
    const result = await chatSession.sendMessage(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error fetching the learning path:", error);
    throw error;
  }
};
