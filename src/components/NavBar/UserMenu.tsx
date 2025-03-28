import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import { useRouter } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { IoWalletOutline } from "react-icons/io5";

export const UserMenu = () => {
  const { googleUserInfo, logout, userInfo, WalletUi } = useWeb3AuthContext();
  const router = useRouter();

  return (
    <div className="flex flex-row justify-self-end items-center gap-2">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar flex items-center justify-center"
        onClick={WalletUi}
      >
        {userInfo ? (
          <IoWalletOutline
            className="w-8 h-8 black content-center"
            style={{ color: "black" }}
          />
        ) : null}
     export default function NavBar({}) {
  const router = useRouter();
  const { isLoggedIn, userInfo } = useWeb3AuthContext();
            ) : (
              <CgProfile className="w-9 h-9" />
            )}
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-md dropdown-content bg-neutralbg rounded-box z-[1] mt-1 w-52 p-2 shadow py-2 text-neutral"
        >
          <li>
            <a onClick={() => router.push("/userPage")}>Perfil</a>
          </li>
          <li>
            <a onClick={() => router.push("/onboarding")}>Ajuda</a>
          </li>

          <li>
            <a onClick={logout}>Sair</a>
          </li>
        </ul>
      </div>
    </div>
  );
};