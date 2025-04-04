import { NextRequest, NextResponse } from "next/server";
import { model } from "@/firebase/config";

function systemMessage(question: string) {
  return `Você é um especialista em revisão de conceitos relacionados a Web3. Avalie a veracidade de declarações fornecidas para responder a pergunta: ${question}. Retorne um objeto JSON no seguinte formato:
{
  "valido": <true|false>,
  "explicacao": "<uma explicação breve e objetiva>"
}
Caso a declaração seja válida, defina 'valido: true' e forneça uma breve explicação afirmando que está correta. Caso seja inválida, defina 'valido: false' e explique de forma clara e objetiva o que está incorreto.`;
}

export const POST = async (req: NextRequest) => {
  try {
    const { question, prompt } = await req.json();

    if (prompt.length > 500) return NextResponse.json({error: "Prompt too long, must be under 500 characters" }, { status: 400 });

    const modelResponse = await model.generateContent({
      systemInstruction: systemMessage(question),
      contents: prompt,
    });
    const response = modelResponse.response;
    const result = await response.text();
    return NextResponse.json({ body: result }, { status: 201 });
  } catch (error: any) {
    // Tratamento de erro
    console.error("Erro no endpoint AI:", error.message);
    return NextResponse.json(
      { message: error.message || "Error validating the prompt" },
      { status: 500 }
    );
  }
};
