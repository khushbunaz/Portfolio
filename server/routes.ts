import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = insertMessageSchema.parse({
        ...req.body,
        createdAt: new Date().toISOString(),
      });
      
      await storage.saveMessage(messageData);
      
      res.status(200).json({ 
        success: true, 
        message: "Your message has been sent successfully!" 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message" 
        });
      }
    }
  });

  // Serve the resume PDF
  app.get("/api/resume", (req, res) => {
    res.download("attached_assets/CS_Resume.pdf", "Khushbunaz_Dalal_Resume.pdf");
  });

  const httpServer = createServer(app);

  return httpServer;
}
