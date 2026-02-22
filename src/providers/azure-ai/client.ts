import { AzureAIModelConfig } from "./types.js";

export async function azureAIChatCompletion(
  model: AzureAIModelConfig,
  messages: unknown[],
  opts: Record<string, unknown> = {},
) {
  const url =
    model.apiStyle === "native"
      ? `${model.endpoint}/models/chat/completions?api-version=2024-05-01-preview`
      : `${model.endpoint}/openai/v1/chat/completions`;

  const maxTokens =
    typeof opts?.maxTokens === "number" ? opts.maxTokens : (model.maxTokens ?? 2048);

  const temperature = typeof opts?.temperature === "number" ? opts.temperature : 0.7;

  const body: Record<string, unknown> = {
    messages,
    max_tokens: maxTokens,
    temperature,
  };

  if (model.apiStyle === "native") {
    body.model = model.id;
  } else {
    body.model = model.id; // deployment name
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${model.apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Azure AI error ${res.status}: ${text}`);
  }

  return res.json();
}
