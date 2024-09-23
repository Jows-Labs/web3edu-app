interface MotionButtonProps<T> {
  label: string;
  type: "button" | "submit" | "reset";
  className?: string;
  Icon?: React.ComponentType<{ className: string }>;
  func: (param: T) => T;
}

interface Kyc1Props<T> {
  setLevel: () => T;
}

interface NavBarProps<T> {
  switchTheme: () => T;
  isDark: boolean;
}
