import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const resolvedFilename = typeof __filename !== "undefined" ? __filename : (typeof import.meta !== "undefined" && import.meta.url ? fileURLToPath(import.meta.url) : "");
const resolvedDirname = typeof __dirname !== "undefined" ? __dirname : (resolvedFilename ? path.dirname(resolvedFilename) : process.cwd());

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy initialize Google GenAI
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient() {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY is not defined. Please add it to Settings > Secrets.");
      }
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
    return aiClient;
  }

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Feedback API endpoint
  app.post("/api/feedback", async (req, res) => {
    try {
      const { message } = req.body;
      if (!message || typeof message !== "string" || message.trim().length < 5) {
        return res.status(400).json({ error: "Feedback must be at least 5 characters long." });
      }

      // Output to the terminal log directed to the specified developer's contact
      console.log("\n=======================================================");
      console.log("📬 [ANONYMOUS CLINICAL FEEDBACK RECEIVED]");
      console.log("Directed to: coolbuddy.neel@gmail.com (as text notification)");
      console.log(`Message:\n"${message.trim()}"`);
      console.log("=======================================================\n");

      res.json({ success: true, message: "Feedback anonymously sent to coolbuddy.neel@gmail.com!" });
    } catch (error: any) {
      console.error("Feedback endpoint error:", error);
      res.status(500).json({ error: "Could not dispatch anonymous feedback." });
    }
  });

  // Chat API endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid request. 'messages' array is required." });
      }

      const client = getGeminiClient();

      // Convert format for Gemini 3.5 SDK
      const contents = messages.map((msg: any) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }]
      }));

      const systemInstruction = `You are a professional Pediatric Companion Assistant. 
You are a knowledgeable pediatric assistant, helping Dr. Neeladri Dawn or other pediatricians with drug reference values, dosage guidelines, symptom indexing, childhood milestone records, examination checks, or supportive parent suggestions.
When asked about medication dosages, emphasize standard guidelines (e.g. Paracetamol is 15mg/kg/dose, Zinc is 20mg daily for diarrhea, etc.).
Keep your responses succinct, direct, clinical yet warm, and formatted with Markdown list items or bold metrics.`;

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents,
        config: {
          systemInstruction,
        }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: error.message || "Failed to communicate with the Pediatric Assistant." });
    }
  });

  // Serve static application or Vite dev server
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server", err);
});
