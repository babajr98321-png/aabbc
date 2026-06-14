const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const testGemini = async () => {
  const apiKey = process.env.bbb || process.env.GEMINI_API_KEY || process.env.aa || process.env.gemini;
  console.log("Using API Key:", apiKey ? apiKey.substring(0, 10) + "..." : "NONE");
  
  if (!apiKey) {
    console.error("No API key found in env!");
    return;
  }

  // Test gemini-2.5-flash
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    console.log("Testing gemini-2.5-flash...");
    const result = await model.generateContent("Say hello in Hebrew");
    const response = await result.response;
    console.log("Success with 2.5-flash! Response:", response.text());
    return;
  } catch (err) {
    console.error("Gemini 2.5-flash failed:", err.message);
  }

  // Test gemini-2.0-flash
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    console.log("Testing gemini-2.0-flash...");
    const result = await model.generateContent("Say hello in Hebrew");
    const response = await result.response;
    console.log("Success with 2.0-flash! Response:", response.text());
    return;
  } catch (err) {
    console.error("Gemini 2.0-flash failed:", err.message);
  }
};

testGemini();
