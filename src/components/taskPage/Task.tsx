"use client";

import { MotionButton } from "../ui/Button";
import { TaskUnits } from "./TaskUnits";

function teste() {
  console.log("teste");
}

export const Task = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <p className="text-dblue font-extrabold text-3xl px-52">
        Criando ferramenta MetaMask
      </p>
      <div className="w-full h-full flex justify-center items-center gap-3">
        <div className="w-3/5 h-full flex justify-center items-start flex-col border ">
          <div className="w-full h-full justify-center items-center flex flex-col bg-cgray rounded-lg">
            <div className="w-4/5 h-1/5 bg-ccblue rounded-lg flex justify-center items-start gap-5 flex-col px-10">
              <p className="text-cblue font-bold text-lg">
                Carteiras em BlockChain
              </p>
              <p className="text-neutral font-semibold">
                Uma carteira digital de criptomoeda é um mecanismo que permite
                armazenar criptomoedas e realizar transferências utilizando o
                computador ou celular. Normalmente é um software ou um hardware
                que permite um usuário guardar seus Tokens e NFTs
              </p>
            </div>
            <div className="w-4/5 h-3/5 justify-center items-center flex">
              <p className="text-neutral font-medium">
                Sua primeira missão para começar a jornada em Web3 é criar uma
                carteira de crypto. Assim como você tem uma conta bancária onde
                guarda seu dinheiro, faz e recebe pagamentos, a sua carteira
                crypto é por onde você vai manipular os seus tokens. A carteira
                é um programa que você instala no seu computador, em geral como
                um plugin do navegador. A carteira que vamos instalar é a mais
                famosa, chamada MetaMask e você poderá instalar no Chrome,
                Firefox, Brave ou Edge. A carteira é um conjunto de chaves
                privadas e públicas que você usa para receber tokens pela
                Blockchain. Ao criar a sua carteira, dentro da MetaMask você
                terá acesso ao endereço público que você informará às outras
                pessoas para receber um token e também as palavras-chaves que
                correspondem à chave privada, que permite a manipulação dos
                tokens na carteira. A chave privada e as palavras chaves você
                nunca deve informar para ninguém e precisa guardar por escrito
                em um local seguro. Qualquer pessoa que tiver acesso a essas
                palavras terá acesso a todas as suas moedas. A sua carteira
                também será usada para você fazer login e acessar os sistemas
                Web3.
              </p>
            </div>
            <div className="w-full px-10">
              <MotionButton
                label="Enviar"
                type="button"
                className="bg-green text-neutral w-full"
                func={teste}
              />
            </div>
          </div>
        </div>
        <div className="h-full w-1/5 justify-center items-center flex flex-col">
          <TaskUnits text="Módulo 1" />;
          <TaskUnits text="Módulo 2" />;
          <TaskUnits text="Módulo 3" />;
          <TaskUnits text="Módulo 4" />;
          <TaskUnits text="Módulo 5" />;
          <TaskUnits text="Módulo 6" />;
        </div>
      </div>
    </div>
  );
};
