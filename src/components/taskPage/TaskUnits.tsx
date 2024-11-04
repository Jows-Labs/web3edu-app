export const TaskUnits = ({ text }: TaskUnitsProps) => {
  return (
    <div className="w-full min-h-20 h-full rounded-lg flex items-center justify-between bg-ccgray rounded-box shadow-lg px-3">
      <label className="label cursor-pointer w-full min-h-20 h-full rounded-lg flex items-center justify-between">
        <span className="text-neutral text-lg text-left font-semibold label-text">
          {text}
        </span>
        <input type="checkbox" className="checkbox" />
      </label>
    </div>
  );
};
