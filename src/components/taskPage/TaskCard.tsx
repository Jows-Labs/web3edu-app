"use client";

import { MotionButton } from "../ui/Button";

function teste() {
  console.log("teste");
}

export const TaskCard = () => {
  return (
    <div className="w-3/5 h-full flex flex-col gap-2">
      <div className="w-full h-full bg-cgray rounded-box flex flex-col justify-start items-start text-neutral overflow-y-auto p-8 font-medium text-medium gap-3">
        <div className="w-full h-2/5 bg-ccblue rounded-box flex flex-col justify-start items-start p-10 gap-3">
          <p className="text-cblue">Carteiras em BlockChain</p>
          <p>
            Uma carteira digital de criptomoeda é um mecanismo que permite
            armazenar criptomoedas e realizar transferências utilizando o
            computador ou celular. Normalmente é um software ou um hardware que
            permite um usuário guardar seus Tokens e NFTs
          </p>
        </div>
        <p className="text-justify">
          Sua primeira missão para começar a jornada em Web3 é criar uma
          carteira de crypto. Assim como você tem uma conta bancária onde guarda
          seu dinheiro, faz e recebe pagamentos, a sua carteira crypto é por
          onde você vai manipular os seus tokens. A carteira é um programa que
          você instala no seu computador, em geral como um plugin do navegador.
          A carteira que vamos instalar é a mais famosa, chamada MetaMask e você
          poderá instalar no Chrome, Firefox, Brave ou Edge. A carteira é um
          conjunto de chaves privadas e públicas que você usa para receber
          tokens pela Blockchain. Ao criar a sua carteira, dentro da MetaMask
          você terá acesso ao endereço público que você informará às outras
          pessoas para receber um token e também as palavras-chaves que
          correspondem à chave privada, que permite a manipulação dos tokens na
          carteira. A chave privada e as palavras chaves você nunca deve
          informar para ninguém e precisa guardar por escrito em um local
          seguro. Qualquer pessoa que tiver acesso a essas palavras terá acesso
          a todas as suas moedas. Sua primeira missão para começar a jornada em
          Web3 é criar uma carteira de crypto. Assim como você tem uma conta
          bancária onde guarda seu dinheiro, faz e recebe pagamentos, a sua
          carteira crypto é por onde você vai manipular os seus tokens. A
          carteira é um programa que você instala no seu computador, em geral
          como um plugin do navegador. A carteira que vamos instalar é a mais
          famosa, chamada MetaMask e você poderá instalar no Chrome, Firefox,
          Brave ou Edge. A carteira é um conjunto de chaves privadas e públicas
          que você usa para receber tokens pela Blockchain. Ao criar a sua
          carteira, dentro da MetaMask você terá acesso ao endereço público que
          você informará às outras pessoas para receber um token e também as
          palavras-chaves que correspondem à chave privada, que permite a
          manipulação dos tokens na carteira. A chave privada e as palavras
          chaves você nunca deve informar para ninguém e precisa guardar por
          escrito em um local seguro. Qualquer pessoa que tiver acesso a essas
          palavras terá acesso a todas as suas moedas.
        </p>

        <MotionButton
          label="Prosseguir"
          type="button"
          className="bg-green text-neutral w-full h-12"
          func={teste}
        />
      </div>
    </div>
  );
};
