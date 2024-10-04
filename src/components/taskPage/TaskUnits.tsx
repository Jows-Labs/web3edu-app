export const TaskUnits = ({ text }: TaskUnitsProps ) => {
    return (
      <div className="bg-cgray w-full h-1/5 rounded-lg flex items-center justify-start sm:px-3 justify-between">
        <p className="text-neutral text-2xl text-left font-semibold">{text}</p>
        <p className="text-neutral text-sm font-semibold ">
            <label className="label cursor-pointer">
              <input type="checkbox" defaultChecked className="checkbox" />
            </label>
        </p>
      </div>
    );
  };