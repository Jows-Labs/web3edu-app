export const UserMenu = () => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full ">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqpHJ_4FPld30j0LE15ImlXgD65AjQ16RuA&s"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-md dropdown-content bg-base rounded-box z-[1] mt-1 w-52 p-2 shadow py-2 text-base-content"
      >
        <li>
          {" "}
          <a>Profile</a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};
