"use client";

export const RenderQuizV = () => {
  return (
    <div>
      <div className="w-full md:h-fit bg-ccblue rounded-box flex flex-col justify-start items-start p-10 gap-3">
        <p className="text-cblue">Responda o quiz a seguir</p>
        <p>
          Acompanhe a ascensão do Bitcoin: de moeda digital desconhecida a um
          dos ativos mais valorizados do mundo. Entenda como ele conquistou o
          mercado financeiro e o que impulsiona seu crescimento!
        </p>
      </div>
      <div className="w-full h-fit p-5 flex flex-row justify-center gap-5">
        <div className="w-2/5 h-2/5 bg-neutralbg border border-dgray flex flex-col p-5 shadow-lg rounded-box">
            <p className="text-dblue text-xl">Iniciante</p>
            <p>Aprenda o básico de blockchain e Etherium com um modelo de fácil aprendizado!</p>
        </div>
        <div className="w-2/5 h-2/5 bg-neutralbg border border-dgray flex flex-col p-5 shadow-lg rounded-box">
            <p className="text-dblue text-xl">Iniciante</p>
            <p>Aprenda o básico de blockchain e Etherium com um modelo de fácil aprendizado!</p>
        </div>
      </div>
    </div>
  );
};
