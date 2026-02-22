export type AzureAIEndpointStyle = "native" | "openai-compat";

export interface AzureAIModelConfig {
  id: string;
  endpoint: string; // https://<resource>.services.ai.azure.com
  apiKey: string;
  apiStyle: AzureAIEndpointStyle;
  maxTokens?: number;
}
