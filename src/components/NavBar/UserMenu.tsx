import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import { CgProfile } from "react-icons/cg";
import { IoWalletOutline } from "react-icons/io5";

export const UserMenu = () => {
  const { googleUserInfo, logout, isLoggedIn, WalletUi } = useWeb3AuthContext();

  return (
    <div className="flex-row justify-self-end gap-2">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
        onClick={WalletUi} 
      >
        <div className="w-10 rounded-full">
          {isLoggedIn ? (
            <IoWalletOutline className="w-9 h-9 black content-center" style={{ color: "black" }} />
          ) : null}
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={1} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {isLoggedIn ? (
              <img alt="Tailwind CSS Navbar component" src={googleUserInfo?.photoURL} />
            ) : (
              <CgProfile className="w-10 h-10" />
            )}
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-md dropdown-content bg-base rounded-box z-[1] mt-1 w-52 p-2 shadow py-2 text-base-content"
        >
          <li>
            <a onClick={() => console.log(googleUserInfo)}>Profile</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a onClick={logout}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
