import { azureAIChatCompletion } from "./client.js";
import { AzureAIModelConfig } from "./types.js";

export class AzureAIProvider {
  constructor(private model: AzureAIModelConfig) {}

  async chat(messages: unknown[], opts?: Record<string, unknown>) {
    return azureAIChatCompletion(this.model, messages, opts);
  }
}
