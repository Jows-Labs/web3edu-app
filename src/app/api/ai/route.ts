import { NextRequest, NextResponse } from "next/server";
import { model } from "@/firebase/config";

function systemMessage(question: string) {
  return `
Você é um avaliador especializado em Web3.
Sua tarefa é analisar a afirmação fornecida e responder apenas com JSON válido.

Pergunta: "${question}"

=== INSTRUÇÕES IMPORTANTES ===
- Responda SOMENTE com um objeto JSON válido.
- NÃO adicione NENHUMA frase antes ou depois.
- NÃO use markdown.
- NÃO escreva "Compreendido", "Aqui está", ou qualquer texto fora do JSON.
- NÃO peça mais informações.
- Não envolva o JSON em blocos \`\`\`.
- Apenas retorne o JSON puro no formato:

{
  "valido": true|false,
  "explicacao": "texto conciso"
}

Se a resposta não puder ser avaliada, retorne:
{"valido": false, "explicacao": "Não foi possível avaliar a afirmação."}
`;
}

export const POST = async (req: NextRequest) => {
  try {
    const { question, prompt } = await req.json();

    if (!question || !prompt) {
      return NextResponse.json(
        { error: "Campos 'question' e 'prompt' são obrigatórios." },
        { status: 400 }
      );
    }

    if (prompt.length > 500) {
      return NextResponse.json(
        { error: "Prompt too long, must be under 500 characters" },
        { status: 400 }
      );
    }

    const modelResponse = await model.generateContent({
      systemInstruction: systemMessage(question),
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    const response = modelResponse.response;
    let result = await response.text();

    result = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return NextResponse.json({ body: result }, { status: 201 });
  } catch (error: any) {
    console.error("Erro no endpoint AI:", error);

    return NextResponse.json(
      { message: error.message || "Error validating the prompt" },
      { status: 500 }
    );
  }
};
