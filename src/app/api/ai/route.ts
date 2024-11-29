import { NextRequest, NextResponse } from "next/server";

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
                        content: `Você é um revisor de conceitos sobre ${escopo}. Retorne true caso o conceito seja válido, ou false com uma breve explicação do que está errado.`,
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
