import { MotionButton } from "../ui/Button";

function teste() {
  console.log("teste2");
}

export const LoginButton = () => {
  return (
    <MotionButton
      label="Login"
      func={teste}
      type="button"
      className="text-black border rounded-2xl font-medium"
    />
  );
};
