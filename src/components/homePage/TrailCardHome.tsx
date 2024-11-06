export const TrailCardHome = ({ text, progress, Icon }: TrailCardHomeProps) => {
  return (
    <div className="w-full h-[30%] bg-cgray border-[1.5px] border-gray rounded-box flex justify-between items-center px-5 lg:px-10 cursor-pointer">
      <div className="flex gap-4 items-center text-neutral h-1/4">
        {Icon ? <Icon className="h-full w-auto text-neutral" /> : <></>}
        <p>{text}</p>
      </div>

      {progress ? (
        <div
          className="radial-progress text-ddblue"
          style={{ "--value": `${progress}`, "--size": "4rem" } as React.CSSProperties}
          role="progressbar"
        >
          {progress}%
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
