import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
app.use(express.json());

let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is required');
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

// Server-side chat proxy endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    const ai = getAiClient();
    const systemInstruction = `You are Matthew Lowinger's AI Executive Assistant. 
Matthew is an Enterprise AI & Digital Transformation Leader specializing in Agentic Engineering, RAG Systems, AI Architecture, and Product Strategy.
He has led 50+ enterprise engagements across Fortune 500s (Bain & Company, Cisco, Johnson & Johnson), Government (NIH), and Healthcare Networks (MedStar Health, CHIME).
Answer queries professionally, concisely, and with a executive tone geared towards C-suite decision makers. 
Mention contacting Matthew at matt.lowinger@gmail.com for strategy sessions.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 300
      }
    });

    const reply = response.text || 'I am ready to assist with Matthew Lowinger\'s Enterprise AI capabilities.';
    res.json({ reply });
  } catch (error: any) {
    console.error('Gemini API Error:', error?.message || error);
    res.status(200).json({
      reply: 'Matthew Lowinger is an Enterprise AI & Digital Transformation Leader specializing in Agentic Engineering, RAG Systems, AI Architecture, and Product Strategy. Reach out at matt.lowinger@gmail.com for advisory inquiries.'
    });
  }
});

export default app;
