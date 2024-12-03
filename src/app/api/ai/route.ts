import { NextRequest, NextResponse } from "next/server";

function systemMessage(escopo: string) {
    return `Você é um especialista em revisão de conceitos relacionados a ${escopo}. Seu papel é avaliar a validade de declarações fornecidas e retornar um objeto JSON no seguinte formato:
{
  "valido": <true|false>,
  "explicacao": "<uma explicação breve e objetiva>"
}
Caso a declaração seja válida, defina 'valido: true' e forneça uma breve explicação afirmando que está correta. Caso seja inválida, defina 'valido: false' e explique de forma clara e objetiva o que está incorreto.`;
}
export const POST = async (req: NextRequest) => {
    try {
        // Extrai os dados da requisição
        const { escopo, prompt } = await req.json();

        // Faz a requisição à API externa
        const response = await fetch("https://llama8b.gaia.domains/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: "system",
                        content: systemMessage(escopo),
                    },
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
            }),
        });

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage =
                errorData.message || "Erro ao buscar conteúdo da seção";
            throw new Error(errorMessage);
        }

        // Extrai os dados da resposta
        console.log("response", response);
        const { choices } = await response.json();
        const message = choices[0]?.message || "Message not found";

        // Retorna a resposta final
        return NextResponse.json({ message }, { status: 201 });
    } catch (error: any) {
        // Tratamento de erro
        console.error("Erro no endpoint POST:", error.message);
        return NextResponse.json(
            { message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
};
