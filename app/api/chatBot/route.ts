//Ollama open webuiを利用したchatbot
import { NextResponse, type NextRequest } from "next/server";
import { pipeline, env } from "@xenova/transformers";

export async function GET() {
  return NextResponse.json({ message: "error", status: 400 });
}

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ error: "不正なリクエスト", status: 403 });
  }
  //ここにもし必要ならchatGPT等のAPIを呼び出すコードを追加する
  // Disable the loading of remote models from the Hugging Face Hub:
  env.allowRemoteModels = true;

  const classifier = await pipeline(
    "text-generation",
    "saldra/rinna-japanese-gpt2-xsmall-onnx",
  );
  const result = await classifier("message: " + message, {
    max_new_tokens: 100,
    temperature: 0.7,
  });
  type TextGenerationResult = {
    generated_text: string;
  };

  const reply = (result as TextGenerationResult[])[0].generated_text;
  return NextResponse.json({ reply, status: 200 });
}

export async function PUT() {
  return NextResponse.json({ message: "error", status: 400 });
}

export async function DELETE() {
  return NextResponse.json({ message: "error", status: 400 });
}
