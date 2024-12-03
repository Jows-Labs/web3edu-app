interface TextAreaProps<T> {
  setContent: (param: string) => T;
  value?: string;
  className?: string;
  placeholder?: string;
}

export const TextArea = ({
  setContent,
  placeholder,
  className,
  value,
}: TextAreaProps<void>) => {
  return (
    <textarea
      value={value}
      onChange={(e) => setContent(e.target.value)}
      placeholder={placeholder}
      className={`input input-bordered bg-white md:text-base text-xs md:rounded-box border-2 border-gray text-dgray py-3 resize-none ${className}`}
    />
  );
};
