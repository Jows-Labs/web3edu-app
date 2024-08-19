import web3EduLogo from "../../images/Web3EduBrasil_logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white text-black flex justify-between items-center z-10 fixed w-screen px-10">
      <div className="text-lg font-bold flex items-center">
        <Image src={web3EduLogo} alt="" className="w-16" />
        <p className="text-[#15457b]">Web3EduBrasil</p>
      </div>
      <nav>
        <a href="" className="mx-2">
          Fórum
        </a>
        <a href="" className="mx-2">
          Trilhas
        </a>
        <a href="" className="mx-2">
          Artigos
        </a>
        <button className="border-2 bg-[#21a46f] text-white	w-24 h-8 rounded-xl">
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header;
