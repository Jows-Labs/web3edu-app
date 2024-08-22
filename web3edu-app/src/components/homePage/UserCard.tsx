export default function UserCard() {
  return (
    <div className="h-screen w-full bg-white flex items-center justify-center">
      <div className="card card-side bg-base-100 shadow-xl w-2/6 h-1/4">
        <figure className="w-2/6 h-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqpHJ_4FPld30j0LE15ImlXgD65AjQ16RuA&s"
            alt="Movie"
            className="h-full"
          />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">Martin Burger King</h2>
          <p>São Paulo, Brasil</p>
        </div>
      </div>
    </div>
  );
}
