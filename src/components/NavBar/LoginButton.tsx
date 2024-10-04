import { MotionButton } from "../ui/Button";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";

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
