"use client";

export const RenderQuizV = () => {
  const QuizText = [
    {
      title: "Iniciante",
      description:
        "Adquirir a base sólida teórica e prática para ser um desenvolvedor Java de sucesso",
    },
    {
      title: "Iniciante",
      description:
        "Adquirir a base sólida teórica e prática para ser um desenvolvedor Java de sucesso",
    },
    {
      title: "Iniciante",
      description:
        "Adquirir a base sólida teórica e prática para ser um desenvolvedor Java de sucesso",
    },
    {
      title: "Iniciante",
      description:
        "Adquirir a base sólida teórica e prática para ser um desenvolvedor Java de sucesso",
    },
    
  ];
  return (
    <div>
      <div className="w-full md:h-fit bg-ccblue rounded-box flex flex-col justify-start items-start p-10 gap-5">
        <p className="text-cblue md:text-xl text-lg">Responda o quiz a seguir</p>
        <p className="md:text-lg text-base"> 
          Acompanhe a ascensão do Bitcoin: de moeda digital desconhecida a um
          dos ativos mais valorizados do mundo. Entenda como ele conquistou o
          mercado financeiro e o que impulsiona seu crescimento!
        </p>
      </div>
      <div className="w-full h-fit p-10 grid md:grid-cols-2 grid-cols-1  justify-center gap-5">
        <>
          {QuizText.map((e) => {
            return (
              <div className="w-full h-fit bg-neutralbg border border-dgray flex flex-col p-5 shadow-lg rounded-box cursor-pointer">
                <p className="text-dblue md:text-xl text-base">{e.title}</p>
                <p className="text-sm">{e.description}</p>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
};
