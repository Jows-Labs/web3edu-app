import { MotionButton } from "../ui/Button";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";

function teste() {
  console.log("teste2");
}

export const LoginButton = () => {
  const { login } = useWeb3AuthContext();

  return (
    <MotionButton
      label="Login"
      func={login}
      type="button"
      className="text-black border rounded-2xl font-medium"
    />
  );
};
