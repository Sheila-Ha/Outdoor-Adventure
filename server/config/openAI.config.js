// Import the files needed to communicate with ChatGPT (OpenAI package)
import { OpenAI } from "openai";
// Create an instance of the OpenAI package with the API key
const ai = new OpenAI({ apiKey: process.env.OPENAI_KEY }); // Use the key from the .env file
// Export the instance of the OpenAI package
export { ai };
