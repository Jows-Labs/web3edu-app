import { FaSearch } from "react-icons/fa";

export const SearchItem = () => {
  return (
    <>
      <div className="flex flex-row w-full  items-center content-center justify-center mt-8 gap-2">
        <label className="input input-bordered flex items-center gap-2  w-2/4 bg-white rounded-box">
          <input
            type="text"
            className="grow bg-cgrey  text-dgray"
            placeholder="Pesquise a sua Trilha"
          />

          <FaSearch className="w-5 h-5 text-gray" />
        </label>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-white input input-bordered rounded-box  hover:bg-white"
          >
            <p className="text-dgray">Filtros </p>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-dgray rounded-box z-[1] w-44 p-2 shadow gap-1 "
          >
            <li className="flex flex-row  h-7 items-center content-center mb-2 mt-2 ">
              <p className="text-base btn-disabled">Chupisco</p>
              <input type="checkbox" className="checkbox w-4 h-8" />
            </li>
            <li className="flex flex-row  h-7 items-center content-center mb-2 ">
              <p className="text-base btn-disabled">Chupisco</p>
              <input type="checkbox" className="checkbox w-4 h-8" />
            </li>
            <li className="flex flex-row  h-7 items-center content-center mb-2 ">
              <p className="text-base btn-disabled">Chupisco</p>
              <input type="checkbox" className="checkbox w-4 h-8" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
