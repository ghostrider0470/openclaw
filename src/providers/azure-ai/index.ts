import { azureAIChatCompletion } from "./client";
import { AzureAIModelConfig } from "./types";

export class AzureAIProvider {
  constructor(private model: AzureAIModelConfig) {}

  async chat(messages: unknown[], opts?: Record<string, unknown>) {
    return azureAIChatCompletion(this.model, messages, opts);
  }
}
