import type { MediaUnderstandingProvider } from "../../types.js";
import { transcribeOpenAiCompatibleAudio } from "../openai/audio.js";

export const azureProvider: MediaUnderstandingProvider = {
  id: "azure-ai",
  capabilities: ["audio"],
  transcribeAudio: transcribeOpenAiCompatibleAudio,
};
