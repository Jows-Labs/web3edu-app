interface InputProps<T> {
  setContent: (param: string) => T;
  value?: string;
  placeholder?: string;
}

export const Input = ({ setContent, placeholder, value }: InputProps<void>) => {
  return (
    <input
      value={value}
      onChange={(e) => setContent(e.target.value)}
      type="text"
      placeholder={placeholder}
      className="input input-bordered w-full md:h-10 h-8 bg-white md:text-base text-xs md:rounded-box border-2 border-gray text-dgray"
    />
  );
};
