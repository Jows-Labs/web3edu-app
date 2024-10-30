export const TaskUnits = ({ text }: TaskUnitsProps) => {
  return (
    <div className="w-full min-h-20 h-full rounded-lg flex items-center justify-between bg-ccgray rounded-box shadow-lg px-3">
      <p className="text-neutral text-lg text-left font-semibold ">{text}</p>
      <p className="text-neutral text-sm font-semibold ">
        <label className="label cursor-pointer ">
          <input
            type="checkbox"
            className="checkbox checkbox-sm"
          />
        </label>
      </p>
    </div>
  );
};
