
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFarmingInsight = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        systemInstruction: `You are an expert in precision agriculture, specifically sub-canopy orchard management and autonomous drone technology for AeroFarming. 
        Your expertise includes: 
        1. Early disease and pest detection (mapping threats before they spread).
        2. Accurate yield and blossom counting for precise forecasting.
        3. Autonomous flight navigation in GPS-denied orchard environments.
        4. Economic impact of data-driven farming (saving $118/acre on average).
        Provide concise, professional advice to orchard owners.`,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

export const generateReportSample = async (reportType: 'A' | 'B') => {
  const prompt = reportType === 'A' 
    ? "Generate a sample 'Early Disease & Pest Detection' report for a 100-acre almond orchard." 
    : "Generate a sample 'Yield & Blossom Count' forecast report for a 50-acre citrus orchard.";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            orchardType: { type: Type.STRING },
            reportType: { type: Type.STRING },
            summary: { type: Type.STRING },
            metrics: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  label: { type: Type.STRING },
                  value: { type: Type.STRING },
                  status: { type: Type.STRING }
                }
              }
            }
          }
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Report Error:", error);
    throw error;
  }
};
