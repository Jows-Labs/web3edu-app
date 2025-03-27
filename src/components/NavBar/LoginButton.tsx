import { MotionButton } from "../ui/Button";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";

export const LoginButton = () => {
  const { login } = useWeb3AuthContext();
  const handleLogin = async () => {
    try {
      await login();
    } catch (error) {
      console.log("LOGIN ERROR: ", error);
    }
  };

  return (
    <MotionButton
      label="Comece Agora!"
      func={handleLogin}
      type="button"
      className="text-white bg-dblue border rounded-xl text-neutral"
    />
  );
};
