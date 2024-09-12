export default function UserCard() {
  return (
    <div className="bg-base-200 shadow-xl sm:w-full md:w-3/4 md:h-1/4 md:flex-row flex sm:flex-col ">
      <figure className="md:(w-2/4 min-w-[40%] h-full) sm:(w-full) ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqpHJ_4FPld30j0LE15ImlXgD65AjQ16RuA&s"
          alt="Movie"
          className="sm:(w-full h-auto) md:(h-full w-auto)"
        />
      </figure>
      <div className="md:w-2/4 md:h-full text-base-content">
        <h2 className="font-bold text-xl">Martin Burger King</h2>
        <p className="font-medium text-lg">São Paulo, Brasil</p>
      </div>
    </div>
  );
}
