export default function UserCard() {
  return (
    <div className="h-screen w-full flex bg-base-100 items-center justify-center z-0 relative">
      <div className="card card-side bg-base-200 shadow-xl w-2/6 h-1/4 ">
        <figure className="w-2/6 h-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqpHJ_4FPld30j0LE15ImlXgD65AjQ16RuA&s"
            alt="Movie"
            className="h-full"
          />
        </figure>
        <div className="card-body text-base-content">
          <h2 className="card-title">Martin Burger King</h2>
          <p>São Paulo, Brasil</p>
        </div>
      </div>
    </div>
  );
}
