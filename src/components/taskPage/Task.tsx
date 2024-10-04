"use client";

import { MotionButton } from "../ui/Button";
import { TaskUnits } from "./TaskUnits";

function teste() {
  console.log("teste2");
}

export const Task = () => {
  return (
    <div className="h-full w-full sm:px-10 flex gap-2">
      <div className="flex flex-col w-3/5 h-4/5">
        <p className="text-ddblue text-4xl font-extrabold px-2 pb-1">
          Criando Carteira no Metamask
        </p>

        <div className="flex flex-col items-center justify-start bg-cgray h-full w-full rounded-lg sm:p-10">
          <div className="flex flex-col justify-center bg-ccblue h-40 w-full rounded-lg sm:p-10 gap-3  ">
            <p className="text-cblue font-bold text-left text-2xl">
              Carteiras em Blockchain
            </p>

            <p className="text-neutral text-xl text-left font-semibold">
              Uma carteira digital de criptomoeda é um mecanismo que permite
              armazenar criptomoedas e realizar transferências utilizando o
              computador ou celular. Normalmente é um software ou um hardware
              que permite um usuário guardar seus Tokens e NFTs.
            </p>
          </div>

          <div className="flex flex-col items-left justify-start bg-cgray h-3/5 rounded-lg sm:p-10 gap-3">
            <p className="text-neutral text-xl text-left font-semibold">
              Sua primeira missão para começar a jornada em Web3 é criar uma
              carteira de crypto. Assim como você tem uma conta bancária onde
              guarda seu dinheiro, faz e recebe pagamentos, a sua carteira
              crypto é por onde você vai manipular os seus tokens. A carteira é
              um programa que você instala no seu computador, em geral como um
              plugin do navegador. A carteira que vamos instalar é a mais
              famosa, chamada MetaMask e você poderá instalar no Chrome,
              Firefox, Brave ou Edge. A carteira é um conjunto de chaves
              privadas e públicas que você usa para receber tokens pela
              Blockchain. Ao criar a sua carteira, dentro da MetaMask você terá
              acesso ao endereço público que você informará às outras pessoas
              para receber um token e também as palavras-chaves que correspondem
              à chave privada, que permite a manipulação dos tokens na carteira.
              A chave privada e as palavras chaves você nunca deve informar para
              ninguém e precisa guardar por escrito em um local seguro. Qualquer
              pessoa que tiver acesso a essas palavras terá acesso a todas as
              suas moedas. A sua carteira também será usada para você fazer
              login e acessar os sistemas Web3.
            </p>

            <MotionButton
              label="Next"
              func={teste}
              type="button"
              className="text-neutral rounded-2xl font-medium bg-green"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-2/5">
        <TaskUnits text="Unidade 1: Tour guia" />
        <TaskUnits text="Unidade 2: Criação de Carteira" />
        <TaskUnits text="Unidade 3: Tour guia" />
        <TaskUnits text="Unidade 4: Tour guia" />
      </div>
    </div>
  );
};