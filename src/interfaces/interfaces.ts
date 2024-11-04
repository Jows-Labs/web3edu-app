interface MotionButtonProps<T> {
  label: string;
  type: "button" | "submit" | "reset";
  className?: string;
  rightIcon?: Boolean;
  Icon?: React.ComponentType<{ className: string }> | string;
  func: (param: T) => T;
}
interface Kyc1Props<T> {
  setLevel: React.Dispatch<React.SetStateAction<string | undefined>>;
  level?: string;
  handleTabClick: (param: string) => T;
}

interface KycIntroProps<T> {
  handleTabClick: (param: string) => T;
}

interface HandleScreenProps {
  activeTab: string;
}

interface TaskUnitsProps {
  text: string;
}

interface TrailsPageProps {
  image: string;
  title: string;
  description: string;
}

interface TrailCardHomeProps {
  Icon?: React.ComponentType<{ className: string }> | string;
  text: string;
  progress: number;
}
